import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import * as themes from '../styles/_themes'
import { Provider as NextAuthProvider } from 'next-auth/client'
import GlobalStyles from 'styles/_global'
import { Header } from 'components/Header'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="apple-touch-icon" href="/favicon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <meta name="description" content="ignews" />
      </Head>
      <NextAuthProvider session={pageProps.session}>
        <ThemeProvider theme={themes.dark}>
          <Header />
          <Component {...pageProps} />
          <GlobalStyles />
        </ThemeProvider>
      </NextAuthProvider>
    </>
  )
}

export default App
