import Link from "next/link";
import styles from '../styles/NavBar.module.css'
import { useContext } from "react";
import { CartContext } from "../store/cart-context";

export default function NavBar() {
  const {cartItems} = useContext(CartContext)

  const totalItemsInCart = cartItems.length
 return (
  <div
  className={`${styles.navbar} container`}>
    <Link href='/'>
     <a className={styles.logo}>Shop</a>
    </Link>
    <nav className={styles.nav}>
     <ul className={styles['nav-list']}>
      <li>
       <Link href='/'>
        <a>Home</a>  
       </Link>
      </li>
      <li>
       <Link href='/products'>
         <a>Products</a>
        </Link>
      </li>
      <li>
       <Link href='/contact'>
          <a>Contact</a> 
        </Link>
      </li>
     </ul>
    </nav>
    <Link href='/cart' passHref>
      <button className={styles.cart}>
          <span className={styles['cart-text']}>Cart <span className={styles.badge}>{totalItemsInCart}</span> </span>
      </button>
    </Link>
   </div>
 )
}