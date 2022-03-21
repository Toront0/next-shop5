import styles from '../styles/Featured.module.css'
import Link from 'next/link'
import Image from 'next/image'
const products = [
 {
  id: 1,
  img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1099&q=80',
  title: 'Apple Watch',
  price: 400
 },
 {
  id: 2,
  img: 'https://images.unsplash.com/photo-1504274066651-8d31a536b11a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
  title: 'Apple AirPods',
  price: 1200
 },
 {
  id: 3,
  img: 'https://images.unsplash.com/photo-1534802046520-4f27db7f3ae5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1229&q=80',
  title: 'Apple Watch',
  price: 750
 }

]



export default function Featured() {


 return (
  <section
  className="section">
   <h2 className="heading-primary text-center">Featured Products</h2>
   <p className={`${styles.subtitle} text-center`}>The Goods thats coming on</p>
    <div className={styles.wrapper}>
     <div className={styles.items}>
      {products.map(product => {
      return <article className={styles.item} key={product.id}>
       <Image className={styles['item-img']} src={product.img} alt={product.title} layout='fill'/>
       <div className={styles['item-info']}>
        <h3>{product.title}</h3>
        <span>${product.price.toFixed(2)}</span>
       </div>
      </article>
     })}
     </div>
      <div className='text-center'>
       <Link href='/products'>
        <button className='primary'>Review Products</button>
       </Link>
      </div>
    </div>
  </section>
 )
}