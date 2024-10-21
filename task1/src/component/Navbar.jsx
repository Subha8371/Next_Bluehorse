"use client";
import React from "react";
import Link from "next/link";
import { useAppSelector } from "@/lib/hook";
import { Image } from "antd";
import styles from "./Navbar.module.css"; // Import the CSS file

const Navbar = () => {
  const counts = useAppSelector((state) => state.item.items);
  console.log(counts, "MMMMMMMMMMM");

  return (
    <div className={styles.navbar}>
      <div className={styles.logo}>
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9c5zF9xgPJYammMMk24czm79rlO92lC4pbA&s"
          width={75}
          alt="Logo"
        />
      </div>
      <div className={styles.navLinks}>
        <Link href="/home">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </div>
      <div className={styles.cart}>
        <Image
          src="https://cdn.vectorstock.com/i/500p/93/20/shopping-bag-vector-1059320.jpg"
          width={50}
          alt="Cart"
        />
        <Link href="/cart">Cart items: {counts.length}</Link>
      </div>
    </div>
  );
};

export default Navbar;
