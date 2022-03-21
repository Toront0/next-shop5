import styles from '../styles/Products.module.css'

export default function FilterItems({ category, filterItems }) {
 return (
  <div className={`${styles['filter-btns']} text-center`}>
    {category.map((c, index) => {
      return <button onClick={() => filterItems(c)} key={index}>{c}</button>
    })}
  </div>
 )
}