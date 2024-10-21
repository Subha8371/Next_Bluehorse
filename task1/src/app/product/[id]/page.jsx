"use client"; //here for params we use it

import { productDetailsApi } from "@/component/Api/Api_product";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Spin } from 'antd';

import styles from "./productDetails.module.css";

const ProductDetails = ({ params }) => {
  console.log(params.id);
  const id = params.id;
  const [details, setDetails] = useState();

  useEffect(() => {
    try {
      const fetchProductDetails = async (id) => {
        const result = await productDetailsApi(id);
        setDetails(result);
      };
      if (id) {
        fetchProductDetails(id); // Fetch details if id exists
      }
    } catch (error) {
      console.log("fetching details error", error);
    }
  }, [id]);

  console.log(details, "lllllllllllllllll");
  return (
    <>
      <div className={styles.productDetailsContainer}>
        {(details)? (
            <>
          <div className={styles.imageWrapper}>
        <Image
          src={details.thumbnail}
          alt={details.title}
          width={250}
          height={250}
          priority
        />
      </div>
      <div className={styles.productInfo}>
        <h3 className={styles.productTitle}>{details.title}</h3>
        <h4 className={styles.productBrand}>Brand: {details.brand}</h4>
        <h4 className={styles.productPrice}>Price: ${details.price}</h4>
        <h4 className={styles.productRating}>Rating: {details.rating} ★</h4>
        <p className={styles.productDescription}>{details.description}</p>
      </div>  </>): <div className={styles.productDetailsContainershimmer}><Spin size="large" /></div>}
     
    </div>
    </>
  );
};

export default ProductDetails;
