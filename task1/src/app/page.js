"use client"
import Footer from "@/component/Footer";
import Navbar from "@/component/Navbar"
import Link from "next/link";
import { useRouter } from 'next/navigation'
const page = () => {

  const router = useRouter();
  return (
    <>
      <button
        onClick={() => { router.push('/about/dipak') }}
      >DIPAK</button>
      <button
        onClick={() => { router.push('/about/subhas') }}
      >SUBHAS</button>


      <ul>
        <li>
          <Link href="/my-first-post">My First Post</Link>
        </li>
        <li>
          <Link href="/blog/next-js-tutorial">Next.js Tutorial</Link>
        </li>
      </ul>
    </>
  )
}

export default page;
