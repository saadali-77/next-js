export default async function ReviewId({params}:{params:Promise<{Reviewid:string, productid:string}>}){
    const {Reviewid,productid} = await params
    return (<>
    <h2> review  {Reviewid} for product {productid}</h2>
    </>)
}