import '../styles/globals.css'
import NavBar from '../components/NavBar'
import CartContextProvider from '../store/cart-context'
import Head from 'next/head'
import dynamic from 'next/dynamic'
const Footer = dynamic(() => import('../components/Footer'))


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="recipe, restaurant, food, delivery" />
        <meta name="author" content="Bjorn" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CartContextProvider>
        <NavBar />
        <Component {...pageProps} />
        <Footer />
      </CartContextProvider>
    </>
  )
}

export default MyApp
