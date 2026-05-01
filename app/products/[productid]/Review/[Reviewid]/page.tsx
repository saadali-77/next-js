import { notFound } from "next/navigation"

function getrandomnumber(count: number) {
  return Math.floor(Math.random() * count)
}

export default async function ReviewId({
  params,
}: {
  params: Promise<{ Reviewid: string; productid: string }>
}) {
  const { Reviewid, productid } = await params

  const random = getrandomnumber(2)

  if (random === 0) {
    throw new Error("error in loading review")
  }

  if (parseInt(Reviewid) > 100) {
    notFound()
  }

  return (
    <>
      <h2>
        Review {Reviewid} for product {productid}
      </h2>
    </>
  )
}