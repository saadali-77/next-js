import { cookies } from "next/headers";
export async function GET() {
    const cookielist= await cookies()
    cookielist.set('theme','white')
  return new Response("<h2>hello api</h2>", {
    headers: {
      "Content-Type": "text/html",
     // "Set-Cookie": "theme=dark; Path=/",
    },
  });
}