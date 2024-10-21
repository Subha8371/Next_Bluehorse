"use client";
import React from "react";
import { useAppDispatch, useAppSelector } from "@/lib/hook";
import styles from "./cart.module.css"; // Ensure you have this CSS file
import { remove } from "@/lib/features/cart/cartSlice";

const Page = () => {
  const counts = useAppSelector((state) => state.item.items);
  console.log(counts, "MMMMMMMMMMM");

 const dispatch=useAppDispatch();

//   const handleRemove=(id)=>[
//     console.log(id,'aaaaaa'),
//     dispatch(remove(id))

//   ]

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Product List</h1>
      <ul className={styles.list}>
        {counts.map((item) => (
          <li key={item.id} className={styles.listItem}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className={styles.image}
            />
            <div className={styles.itemDetails}>
              <h2 className={styles.productTitle}>{item.title}</h2>
              <p className={styles.price}>${item.price.toFixed(2)}</p>
              <p className={styles.description}>{item.description}</p>
              <p className={styles.category}>Category: {item.category}</p>
              <p className={styles.stock}>Stock: {item.stock}</p>
              <p className={styles.warranty}>
                Warranty: {item.warrantyInformation}
              </p>
            </div>
            <div >
              <button className={styles.button} onClick={ () => dispatch(remove(item.id))}>Remove Item</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
