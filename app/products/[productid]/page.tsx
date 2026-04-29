

import { Metadata } from "next"
type props= {
    
    params:Promise<{productid:string}>

}
export const generateMetadata= async({params}:props):Promise<Metadata>=>{
const id=(await params).productid
return{
    title:`product ${id}`
}
}
export default async function Products({params}:props){

    const productid= (await params).productid
    return <h1>this is product {productid}</h1>
}

