'use client'
import { usePathname } from "next/navigation"



export default function  Page(){
    const pathName= usePathname()
     const productid=   pathName.split('/')[2]
       const Reviewid= pathName.split('/')[4]

      return( 
         <h1>Review {Reviewid} for product {productid} is not found</h1>
    )
}