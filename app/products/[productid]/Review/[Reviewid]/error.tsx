'use client'
import { useRouter } from "next/navigation"
import { startTransition } from "react"
export default function Error({error,reset}: {error:Error, reset:()=>void}
){
    const router= useRouter()
    const reload= ()=>{
        startTransition(()=>{
            router.refresh()
            reset()
        })
    }
    return (<>
    <h2>error in  review id</h2>
    <p>{error.message}</p>
    <button onClick={reload}>Try again</button>
    </>)
}