'use client'
export default function Error({ error }: { error: Error }) {
    console.log(error.message)
        return <div>Error occurred while fetching user data. {error.message}</div>
}