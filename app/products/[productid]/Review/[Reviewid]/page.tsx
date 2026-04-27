import { notFound } from "next/navigation"
export default async function ReviewId({params}:{params:Promise<{Reviewid:string, productid:string}>}){
    const {Reviewid,productid} = await params
    if(parseInt(Reviewid)>100){
        notFound()
    }
    return (<>
    <h2> review  {Reviewid} for product {productid}</h2>
    </>)
}