import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from '../context/AuthContext'
import { theme } from '../styles/themes'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <AuthProvider>
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </AuthProvider>
  )
}

export default MyApp
