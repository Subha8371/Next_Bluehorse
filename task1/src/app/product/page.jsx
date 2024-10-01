"use client";
import { useState, useEffect } from "react";
import { productApi } from "@/component/Api/Api_product";
import Product from "@/component/AppComponent/Product";
import styles from "./productList.module.css";
import Shimmer from "@/component/AppComponent/shimmer";
const product = () => {
  const [productList, setProductList] = useState([]);
  const [isloading,setIsloading]=useState(true);
  const [category,setCategory]=useState("All Categories");
  useEffect(() => {
    try{

        const fetchProduct = async () => {
            const result = await productApi();
            setProductList(result);
            console.log(result)
          };
          fetchProduct();
    }catch(error){
      console.error("Error fetching products:", error)
    }
    finally{
      // if(productList!=null){
        setIsloading(false)
      // }
    }
  }, []);

const categories = [
    "All Categories",
    "Beauty",
    "Fragrances",
    "Furniture",
    "Groceries",
  ];
  const handleChange=(event)=>{
    setCategory(event.target.value)
  }
return (
  <>
   <div className={styles.categoryDropdown}>
        <label htmlFor="categorySelect">Category: </label>
        <select id="categorySelect" className={styles.select}
         onChange={handleChange}
        >
          {categories.map((category, index) => (
            <option key={index} value={category}
            >
              {category}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.Product}>
        {isloading===true ?( // Display 20 Shimmer components while loading`
          Array.from({ length: 20 }).map((_, index) => (
            <Shimmer key={index} />
          ))):(
            
          productList
          .map((item) => (
            <Product key={item.id} item={item} /> // Use key={item.id} for a unique key
          ))
          .filter((item) =>((category.toLocaleLowerCase()!='all categories')?item.props.item.category==category.toLowerCase():item) ) // Filter out the item with id 17   
          )}
      </div>
    
  </>
);

};

export default product;
