import Link from "next/link"

const Footer = () => {
  return (
    <>
     <div style={{display:'flex', justifyContent:'center', gap:'200px' , padding:'10px', fontSize:20}}>
        <Link href="/home">@Home</Link>
        <Link href="/about">@About</Link>

        <Link href="/contact">@Contact</Link>
      </div>
    </>
  )
}

export default Footer