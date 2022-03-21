import { useContext, useState } from 'react'
import { CartContext } from '../../store/cart-context'
import { createClient } from 'contentful'
import styles from '../../styles/ProductDetail.module.css'
import Image from 'next/image'
import  { Toaster } from 'react-hot-toast';


const ProductDetail = ({product}) => {

  const {addItemToCart} = useContext(CartContext)
  const [itemAmount, setItemAmount] = useState(1)


  const submitHandler = (e) => {
    e.preventDefault()
    
    // const totalAmount = amountInputRef.current.value
    // const totalAmountNumber = +totalAmount
    addItemToCart({
      id: product.sys.id,
      title: product.fields.title, 
      price: product.fields.price,
      amount: itemAmount
    })
  }

  const increaseAmount = () => {
    setItemAmount(v => v + 1)
    if (itemAmount >= 20) {
      return setItemAmount(20)
    }
  }

  const decreaseAmount = () => {
    if(itemAmount === 1) {
       return setItemAmount(1)
    }
    setItemAmount(v => v - 1)
  }

 return (
  <main className={`${styles.main} container`}>
   <section className="section">
     <div className={styles.wrapper}>
      <div className={styles.img}>
       <Image src={'https:' + product.fields.images[1].fields.file.url} alt={product.title} width={500} height={600} /> 
      </div>
      <div className={styles.text}>
       <h3>{product.fields.title}</h3>
       <p>{product.fields.description}</p> 
       <span>${product.fields.price}</span>
       <form className={styles.form} onSubmit={submitHandler}>
         <button className={styles['amount-btn']} onClick={decreaseAmount} type='button'>-</button>
         <input className={styles.input} onChange={e => setItemAmount(e.target.value)} type="number" value={itemAmount} min='1' max='20'  />
         <button className={styles['amount-btn']} onClick={increaseAmount} type='button'>+</button>
         <button className={`${styles['submit-btn']} primary`} type='submit'>Add to Cart</button>
          <Toaster 
          position='top-right'
          />
       </form>
                {itemAmount === 20 && <p className={styles['warning-text']}>You reach a max value</p>}
        
      </div>
      </div>
   </section>
  </main>
 )
}

export default ProductDetail

const client = createClient({
    space: 'ocrzuik3dppb',
    accessToken: 'KD5NkhBv-jIlUqmaR_RQdNxqgHAJr8DWX26R1Fxm090'
})

export async function getStaticPaths() {
   const response = await client.getEntries({
     content_type: 'product'
   })

   const paths = response.items.map((item) => {
     return {
       params: { slug: item.fields.slug }
     }
   })

    return {
     paths,
     fallback: false
    }

}

export async function getStaticProps({params}) {
 const { items } = await client.getEntries({
   content_type: 'product',
   'fields.slug': params.slug
 })



 return {
  props: {
   product: items[0]
  }
 }
}

