
import Link from "next/link"
export default function Home(){
    return (<>
    <h1>welcome home page</h1>
    <Link href='/product' style={{textDecoration:'underline', color:'green'}}>product</Link>
    <Link href='/articles/breaking-news?lang=en'>Read in English</Link>
    <Link href='/articles/breaking-news?lang=fr'>Read in french</Link>
    
    </>)
}