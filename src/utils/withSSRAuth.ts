import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from "next"
import { destroyCookie, parseCookies } from "nookies"
import { AuthTokenError } from "../services/errors/AuthTokenError"
import decode from 'jwt-decode'
import { ValidateUserPermissions } from "./validateUserPermissions"

type WithSSROptions = {
    permissions: string[];
    roles: string[];
}


export function WithSSRAuth<p>(fn: GetServerSideProps<p>, options?: WithSSROptions) {
    return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<p>> => {
        const cookies = parseCookies(ctx)
        const token = cookies['yellow.token']

            if(!token) {
                return { 
                redirect: {
                    destination: '/',
                    permanent: false,
                }
            }
        }

        if (options) {
            const user = decode<{permissions: string[], roles: string[]}>(token)
            const { permissions, roles} = options

            const userHasValidPermissions = ValidateUserPermissions({ 
                user, permissions, roles
            })

            if (!userHasValidPermissions) {
                return { 
                    redirect: {
                        destination: '/dashboard',
                        permanent: false
                    }
                }
            }
        }



        try{ 
            return await fn(ctx)
        } catch (err) {
            if (err instanceof AuthTokenError) {
                destroyCookie(ctx, 'yellow.token')
                destroyCookie(ctx, 'yellow.refreshToken')
        
                return { 
                    redirect: {
                        destination: '/',
                        permanent: false
                    }
                }
            }
        }

    }
}