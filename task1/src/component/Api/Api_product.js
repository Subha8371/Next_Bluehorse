import axios from "axios";

export const productApi=async()=>{
  const produtctlist=await axios.get('https://dummyjson.com/products')
  return produtctlist.data.products
  
}

export const productDetailsApi=async(id)=>{
  console.log('Fetching product with id:', id)
  const productDetails= await axios.get(`https://dummyjson.com/products/${id}`)
  return productDetails.data
}