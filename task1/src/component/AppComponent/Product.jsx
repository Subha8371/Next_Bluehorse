import Image from "next/image";
import styles from "./product.module.css";
import { useAppDispatch } from "@/lib/hook";
import { add } from "@/lib/features/cart/cartSlice";

const Product = ({ item }) => {
  // console.log(item.category);
  const dispatch=useAppDispatch();
  const handleAddtoCart=(e)=>{
    e.preventDefault(); // Prevent default link behavior
    e.stopPropagation(); 
  dispatch(add(item))
  }


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
          />
        </div>
        <div>
          <h4>{item.title}</h4>
          <h4>Price-{item.price}</h4>
        </div>
        <button onClick={handleAddtoCart}>Add to cart</button>
      </div>
    </>
  );
};

export default Product;
