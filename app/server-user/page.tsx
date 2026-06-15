type User={
    id:number,
    name:string,
    email:string,
    phone:string
}
export default async function Server(){
  const res=  await fetch('https://jsonplaceholder.typicode.com/usersrr')

  if(!res.ok) throw new Error('failed to fetch data')

const users :User[]= await res.json()
console.log(users)
}