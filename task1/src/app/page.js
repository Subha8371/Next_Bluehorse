"use client"
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar"
import { useRouter } from 'next/navigation'
const page = () => {
  
  const router=useRouter();
  return (
    <>
    <Navbar/>
    <button
      onClick={()=>{router.push('/about/dipak')}}
    >DIPAK</button>
    <button
     onClick={()=>{router.push('/about/subhas')}}
    >SUBHAS</button>
    <Footer/>
    </>
  )
}

export default page