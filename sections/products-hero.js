import styles from '../styles/ProductsHero.module.css'
import Image from 'next/image'

export default function ProductsHero() {
 return (
  <section className={styles.section}>
    <div className={`${styles.wrapper}`}>
     <Image src='https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' alt="shop-background" layout='fill'/>
     <div className={styles.content}>
      <h2 className="heading-primary">Crazy Sales</h2>
      <p>Hurry up to buy at the lowest prices</p>
     </div>
    </div>
  </section>
 )
}