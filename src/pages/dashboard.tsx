import { useContext, useEffect } from "react"
import { Can } from "../components/can"
import { AuthContext } from "../context/AuthContext"
import { setupApiClient } from "../services/api"
import { api } from "../services/apiClient"
import { WithSSRAuth } from "../utils/withSSRAuth"

export default function Dashboard(){
    const { user, signOut, isAuthenticated } = useContext(AuthContext)

    useEffect(() => {
        api.get('/me').then(response => console.log(response))
        .catch(err => console.log(err))
    }, [])

    return(
        <>
        <h1>dashboard {user?.email}</h1>

        <button onClick={signOut}>sign Out</button>

        <Can permissions={['metrics.list']}>
            <h1>Autorizado</h1>
        </Can>
        </>
    )
}

export const getServerSideProps = WithSSRAuth(async (ctx) => {
    const apiClient = setupApiClient(ctx)
    const response = await apiClient.get('/me')

    return {
        props: {}
    }
})