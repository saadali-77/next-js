'use client'
export default function Error({error}: {error:Error}
){
    return (<>
    <h2>error in  review id</h2>
    <p>{error.message}</p>
    </>)
}