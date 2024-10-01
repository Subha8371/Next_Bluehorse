"use client"

import axios from "axios";

export const productApi=async()=>{
  const produtctlist=await axios.get('https://dummyjson.com/products')
  return produtctlist.data.products
  
}