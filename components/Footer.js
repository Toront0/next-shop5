import Link from "next/link";
import styles from '../styles/Footer.module.css'
import {AiFillInstagram, AiFillFacebook, AiFillTwitterCircle} from 'react-icons/ai'

export default function Footer() {
 return (
  <footer className={styles.footer}>
   <div className={`${styles.wrapper} container`}>
    <Link href='/'>
     <a className={styles.logo}>Shop</a>
    </Link>
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
     <div className={styles.icons}>
      <a href="https://instagram.com">
       <AiFillInstagram />
      </a>
      <a href="https://facebook.com">
       <AiFillFacebook />
      </a>
      <a href="https://twitter.com">
       <AiFillTwitterCircle />
      </a>
     </div>
   </div>
  </footer>
 )
}