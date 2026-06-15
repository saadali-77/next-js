import { cookies } from "next/headers"
export default async function About(){
    const store= await cookies()
  const thems=  store.get('theme')
  console.log(thems)
    return <h2>about page {new Date().toLocaleDateString()}</h2>
}