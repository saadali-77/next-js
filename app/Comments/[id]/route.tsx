import { Comment } from "../data";
export async function GET(req:Request,{params}:{
    params:Promise<{id:string}>
}){
    const {id}= await params
    const comment = Comment.find((com)=>com.id===parseInt(id))
    return Response.json(comment)
}

export async function PATCH(req:Request,{params}:{
    params:Promise<{id:string}>
}
){
    const {id}= await params;
    const comm= await req.json()
    const commentIndex = Comment.findIndex((com)=>com.id===parseInt(id))
    Comment[commentIndex].name = comm.name
    return Response.json(Comment[commentIndex])

}

