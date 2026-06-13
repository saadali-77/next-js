import { Comment } from "./data";
export async function GET(){
    return Response.json(Comment)
}