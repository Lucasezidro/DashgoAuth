import { FormEvent, useContext, useState } from "react"
import { AuthContext } from "../context/AuthContext"
import { GetServerSideProps } from "next"
import { parseCookies } from 'nookies'
import { WithSsrGuest } from "../utils/withSSRGuest"


export default function Home() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const { signIn } = useContext(AuthContext)

  async function handleSubmit(event: FormEvent) {2
    event.preventDefault()

    const data = {
      email,
      password
    }

    await signIn(data)

  }


  return (
    <form onSubmit={handleSubmit}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} />

      <button type="submit">Entrar</button>
    </form>
  )
}

export const getServerSideProps: GetServerSideProps = WithSsrGuest(async (ctx) => { 
  return {
    props: {}
  }
})
