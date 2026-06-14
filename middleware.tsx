import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
export  function middleware (req:NextRequest){
    const res= NextResponse.next()
   const token= req.cookies.get('token')
   if(!token){
    res.cookies.set('token','123')
   }
   return res;

    return NextResponse.redirect(new URL('/routehandler',req.url))


}
export const config= {
    matcher: '/products'
}