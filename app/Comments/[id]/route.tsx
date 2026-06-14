import { Comment } from "../data";
export async function GET(req:Request,{params}:{
    params:Promise<{id:string}>
}){
    const {id}= await params
    const comment = Comment.find((com)=>com.id===parseInt(id))
    return Response.json(comment)
}

