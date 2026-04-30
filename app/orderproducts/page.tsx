'use client'
import React from 'react'
import { redirect } from 'next/navigation'
export default function page() {
    const handle= ()=>{
redirect('/')
    }
  return (
    <div>page
        <button onClick={handle}>move</button>
    </div>
  )
}


