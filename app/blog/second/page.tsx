import { resolve } from 'node:path'
import React from 'react'

export default async function SecondBlog(){
  await new Promise(resolve=>{
    setTimeout(()=>{
      resolve(true)
    }, 2000)
  })
  return (
    <h2> second blog page</h2>
  )
}
