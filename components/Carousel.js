import {useRef, useState, useEffect} from 'react'
import { motion } from 'framer-motion'
import styles from '../styles/Carousel.module.css'
import Link from 'next/link'
import Image from 'next/image'


export default function Carousel({ images = [] }) {
 const [width, setWidth] = useState()
 const carouselRef = useRef()

 useEffect(() => {
  setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
 }, [])

  return (
    <motion.div ref={carouselRef}  className={styles.carousel}>
     <motion.div drag='x' dragConstraints={{ right: 0, left: -width }} whileTap={{ cursor: 'grabbing' }} className={styles['inner-carousel']}>
      {images.map((img, index) => {
       return <motion.div key={index} className={styles.slide}>
        <img  className={styles.img}  src={img.img} width={400} height={400} /> 
       </motion.div>
      })}
     </motion.div>
    </motion.div>
  )
}
