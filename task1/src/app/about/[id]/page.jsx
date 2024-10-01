'use client'
import { useParams } from 'next/navigation'
const page = () => {
  const params=useParams()
  // console.log(params)
  useEffect(() => {
    console.log(params); // This will now log on the client
  }, [params]); // Dependency array to re-log when params change

  return (
    <div>Id page dynamic ruting......</div>
  )
}
export default page