
'use client'
import Main from "./dashboard/page";
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useEffect, useState } from 'react'
import Loading from "@/components/ui/loading";
const Home = () => {
  const [loading, setLoading] = useState<boolean>(false)
    useEffect(() => {
      setLoading(true)
      setTimeout(() => {
        setLoading(false)
      }, 2000)
    }, [])


  useEffect(() => {
      AOS.init({duration: 1800})
    })
  return (
      
    <>
       {loading ? (
      <Loading />
     ):(
      <>
        <Main />
      </>
     )}
    
    </>
  
  )
}
export default Home;