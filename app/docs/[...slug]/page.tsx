export default async function DocsId({params}:{params:Promise<{slug:string[]} >}){
    const {slug}=await params
    
    if(slug.length===2){
        return <h2> this is {slug[0]} and concept {slug[1]} page</h2>
    }
    else if (slug.length===1){
        return <h2> this is {slug[0]} page</h2>
    }
    return(<>
    <h2>docs page</h2>
    </>)
    
    
}
//slug inside double [] means its a catch all route and it will catch all the routes that are not defined in the docs folder and it will return the slug as an array of strings.