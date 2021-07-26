import Router from "next/router";
import { setCookie, parseCookies, destroyCookie } from 'nookies'
import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/apiClient";


type User = {
    email: string;
    username: string;
    permissions: string[];
    roles: string[];
}

type SignInCredentials = {
    email: string;
    username: string;
    password: string;
}

type AuthContextData = {
    signIn(credentials: SignInCredentials): Promise<void>
    signOut: () => void
    user: User;
    isAuthenticated: boolean;
}

type AuthProviderProps = {
    children: ReactNode
}

export const AuthContext = createContext({} as AuthContextData)

let authChannel: BroadcastChannel

export function signOut() {
    destroyCookie(undefined, 'yellow.token')
    destroyCookie(undefined, 'yellow.refreshToken')

    authChannel.postMessage('signOut')

    Router.push('/')
}

export function AuthProvider({ children }: AuthProviderProps) {

    const [user, setUser] = useState<User>()
    const isAuthenticated = !!user;

    useEffect(() => {
        authChannel = new BroadcastChannel('auth')

        authChannel.onmessage = (message) => {
            switch (message.data) {
                case 'signOut':
                    signOut();
                    break;
                default:
                    break;
            }
        }
    }, [])

    useEffect(() => {
        const { 'yellow.token': token } = parseCookies()

        if (token) {
            api.get('/me').then(response => {
                const { email, username, permissions, roles } = response.data

                setUser({ email, username, permissions, roles })
            })
            .catch(() => {
                signOut()
            })
        }
    }, [])

    async function signIn({ email, password, username }: SignInCredentials){
        try {
            const response = await api.post('sessions', {
                email,
                password,
                username,
            })

            const { token, refreshToken, permissions, roles } = response.data

            setCookie(undefined, 'yellow.token', token, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })
            setCookie(undefined, 'yellow.refreshToken', refreshToken, {
                maxAge: 60 * 60 * 24 * 30, // 30 days
                path: '/'
            })
            
            setUser({
                email,
                permissions,
                username,
                roles,
            })

            api.defaults.headers['Authorization'] =`Bearer ${token}`

            Router.push('/dashboard')

        } catch (err) {
            console.log(err)
    } 
}

    return(
        <AuthContext.Provider value={{ signIn, signOut, isAuthenticated, user }}>
            {children}
        </AuthContext.Provider> 
    )
}