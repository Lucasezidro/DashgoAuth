import { useState } from 'react';
import { api } from '../services/apiClient';

type User = {
    email: string;
    username: string;
    password: string;
    permissions: string[];
    roles: string[];
}




export async function useAuth({ email, password, username }) {
    const [user, setUser] = useState('')

    const data = await api.post('/session', { 
        email, 
        username, 
        password,
    })

    function users(){
        setUser(data.data)
    }

    return {
        user,
        users
    }
    
}   