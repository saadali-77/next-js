
import { headers } from "next/headers";
export async function GET(req: Request){
 const headlist= await headers()
 console.log(headlist.get('Authorization'))
 return new Response('hello header')
}