// import { NextRequest } from "next/server";
// import { NextResponse } from "next/server";
// export  function middleware (req:NextRequest){
//     const res= NextResponse.next()
//    const token= req.cookies.get('token')
//    if(!token){
//     res.cookies.set('token','123')
//    }
//    return res;

//     return NextResponse.redirect(new URL('/routehandler',req.url))


// }
// export const config= {
//     matcher: '/products'
// }

import { clerkMiddleware } from '@clerk/nextjs/server';

export default clerkMiddleware();

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for Clerk's auto-proxy path
    '/__clerk/:path*',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
