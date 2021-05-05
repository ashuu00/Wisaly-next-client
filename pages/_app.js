import '../styles/globals.scss'
import { ChakraProvider } from "@chakra-ui/react"
import Head from 'next/head'
import Layout from '../components/layout/Complete'
function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ChakraProvider>
  )
}

export default MyApp
