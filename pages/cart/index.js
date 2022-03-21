import { useContext } from "react"
import { CartContext } from "../../store/cart-context"
import styles from '../../styles/Cart.module.css'
import Link from 'next/link'
import {MdDelete} from 'react-icons/md'
import Head from "next/head"

export default function CartPage() {
 const {cartItems, removeItemFromCart} = useContext(CartContext)
 console.log(cartItems)
 const totalPriceInCart = cartItems.reduce((current, item) => {
      return current + item.price * item.amount
    }, 0)
 if (cartItems.length === 0) {
  return (
   <section className={`${styles.section} section`}>

    <div className="text-center">
   <h2 className="heading-primary">Your Cart is empty</h2>
   <Link href='/products' passHref>
    <button className="primary">Back to shopping</button>
   </Link>
  </div>
   </section>
  )
 }

 return <main className={`${styles.main} container`}>
      <Head>
        <title>Cart</title>
        <meta name="description" content="Here you can check out details at yours shop" />
      </Head>

  <section className='section'>
   <h3 className="heading-primary text-center">Your Cart</h3>
   <div className={styles.items}>
     {cartItems.map((item) => {
     return (
      <div className={styles.item} key={item.id}>
       <h3>{item.title}</h3>
       <span>${item.price}</span> 
       <span>{item.amount}</span>
       <MdDelete className={styles['delete-icon']} onClick={() => removeItemFromCart(item.id)} />
      </div>
     )
    })} 
   </div>
   <div className={styles.info}>
     <div className={styles.text}>
      <span>Total</span>
      <span className={styles['info-price']}>${totalPriceInCart}</span>
     </div>
     <button className="primary">
      Checkout
     </button>
   </div>
  </section>
 </main>
}
