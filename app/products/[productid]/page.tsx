export default async function ProductId({params}:{params:Promise<{productid:string}>}){
    const {productid} =  await params
    return (<>
    <h2>products details {productid}</h2>
    </>)
}