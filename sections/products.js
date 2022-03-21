import Link from 'next/link'
import { useState } from 'react'
import styles from '../styles/Products.module.css'
import {BsSearch} from 'react-icons/bs'
import dynamic from 'next/dynamic'
import Image from 'next/image'


const FilterItems = dynamic(() => import('../components/FilterItems'))

export default function Products({ products }) {
  const [menuItems, setMenuItems] = useState(products)
    const allCategories = ['all', ...new Set(products.map(product => product.fields.category))]

  const filterItems = (category) => {
    const filteredItems = products.filter((product) => product.fields.category === category)
    setMenuItems(filteredItems)
    if(category === 'all') {
      setMenuItems(products)
    }
  }


 return (
  <section className="section">
   <div className="wrapper container">
    <h2 className="heading-primary text-center">Products</h2>
    <FilterItems filterItems={filterItems} category={allCategories}/>
     <div className={styles.products}>
      {menuItems.map((item) => {
       console.log(item)
        return <Link key={item.sys.id} href={`products/${item.fields.slug}`} passHref>
          <div className={styles.item}>
              <Image className={styles.img} src={'https:' + item.fields.images[0].fields.file.url} alt={item.fields.title} width={205} height={315} />
              <BsSearch className={styles['item-icon']}/>
            <div className={styles.text}>
              
              <h3>{item.fields.title}</h3>
              <span>${item.fields.price.toFixed(2)}</span>  
            </div>
          </div>
        </Link>
      })}
     </div>
   </div>
  </section>
 )
}




