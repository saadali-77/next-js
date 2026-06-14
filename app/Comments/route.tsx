import { json } from "stream/consumers";
import { Comment } from "./data";
import { NextRequest } from "next/server";
export async function GET(req:NextRequest){
  const searchparams=  req.nextUrl.searchParams
  const query= searchparams.get('query')
 const filtercomment= query? Comment.filter((com)=>com.name.includes(query)): Comment

    return Response.json(filtercomment)
}
export async function POST (req:Request){
    const comm= await req.json()
    const newcomment= {
        id:Comment.length + 1,
        name: comm.name
    }
    Comment.push(newcomment)
    return Response.json(newcomment,{status: 201})

}