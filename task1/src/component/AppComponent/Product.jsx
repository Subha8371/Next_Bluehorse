import Image from "next/image";
import styles from "./product.module.css"
const Product = ({item}) => {
    console.log(item.category)

    
    
  return (
    <>
  


    <div className={styles.card}>
    <div className={styles.image}>  
     <Image
      src={item.images[0]}
      alt="Picture of the author"
      width={250}
      height={250}
      priority
    /></div>
    <div>
        <h4>{item.title}</h4>
        <h4>Price-{item.price}</h4>
    </div>
    </div>
   
    </>
  )
}

export default Product