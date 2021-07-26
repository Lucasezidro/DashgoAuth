import { ColorModeScript } from '@chakra-ui/react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { themeConfig } from '../styles/themes'


export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;900&display=swap" rel="stylesheet" />
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&display=swap" rel="stylesheet"></link>
                <link rel="preconnect" href="https://fonts.googleapis.com"/>
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Patrick+Hand&family=Poppins:wght@600&display=swap" rel="stylesheet"></link>
                </Head>

                <body>

                    <ColorModeScript initialColorMode={themeConfig.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}