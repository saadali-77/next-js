type User={
    id:number,
    name:string,
    email:string,
    phone:string
}
export default async function Server(){
  const res=  await fetch('https://jsonplaceholder.typicode.com/users')
const users :User[]= await res.json()
console.log(users)
}