// import ProductsHero from "../../sections/products-hero";

import dynamic from 'next/dynamic'
import Head from "next/head"

import { createClient } from "contentful";

const Products = dynamic(() => import('../../sections/products'))
const ProductsHero = dynamic(() => import('../../sections/products-hero'))



function ProductsPage({products}) {
 return <main>
    <Head>
      <title>Products - Shop</title>
      <meta name="description" content="Here you can find everything that you need" />
    </Head>
      <ProductsHero />
      <Products products={products}/>
 </main>
}


export default ProductsPage
export async function getStaticProps() {
  const client = createClient({
    space: 'ocrzuik3dppb',
    accessToken: 'KD5NkhBv-jIlUqmaR_RQdNxqgHAJr8DWX26R1Fxm090'
  })

  const res = await client.getEntries({ content_type: 'product' })

  return {
    props: {
     products: res.items
    },
  }
}
