import { json } from "stream/consumers";
import { Comment } from "./data";
export async function GET(){
    return Response.json(Comment)
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