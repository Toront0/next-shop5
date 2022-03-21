import Link from 'next/link'
import styles from '../styles/HomeHero.module.css'


export default function HomeHero() {
 return (
   <section
   className='section'>
        <div className={styles.wrapper}>
        <div className={styles.text}>
         <p className={styles['sub-title']}>Clothes, furniture and so on</p>
         <h1 className={styles.title}>The shop<br /> where you <br />can find <br /> everything</h1>
        <p 
        className={styles.desc}>We are selling goods for almost 20 years and dealing with that well. So we have a worldwide confession and millions satisfied clients around the world. We have a great service for clients.</p>
        <div
        className={styles.buttons}>
          <Link href='/products'>
            <button className='primary'>Buy</button>
          </Link>
          <Link href='/products'>
            <button className='secondary'>Review</button>
          </Link>
        </div>
      </div>
      <div className="hero-img">

      </div>
      </div>
      </section>
 )
}