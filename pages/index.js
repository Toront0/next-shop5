import HomeHero from '../sections/home-hero'
import Featured from '../sections/featured-products'
import Head from 'next/head'

export default function Home() {
  return (
    <main className='container'>
      <Head>
        <title>Home - Restaurant</title>
        <meta name="description" content="The best shop with the best goods in the world" />
      </Head>
     <HomeHero />
     <Featured />
    </main>
  )
}
