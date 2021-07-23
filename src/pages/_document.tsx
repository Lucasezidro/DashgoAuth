import Document, { Html, Head, Main, NextScript } from 'next/document'


export default class MyDocument extends Document {
    render(){
        return(
            <Html>
                <Head>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&display=swap" rel="stylesheet"/>

                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Otomanopee+One&family=Roboto:wght@400;500;700&display=swap" rel="stylesheet"></link>
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}