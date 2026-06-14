export const data='force-static'
export const revalidate=10
export async function GET(){
    return new Response(new Date().toTimeString())
}