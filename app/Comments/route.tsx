import { json } from "stream/consumers";
import { Comment } from "./data";
export async function GET(){
    return Response.json(Comment)
}
export async function POST(request: Request){
   const comm= await request.json()
   const newComment={
    id:Comment.length +1,
    name: comm.name
   }
   Comment.push(newComment)
   return new Response(JSON.stringify(newComment),{
    headers:{
        "Content-Type": "application/json",
    
    },
    status: 201
   })
}