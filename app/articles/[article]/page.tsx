export default  async function Article({
  params,
  searchParams,
}: {
  params: { article: string };
  searchParams?: { lang?: "en" | "fr" };
}) {
  const { article } =  await params;
  const lang = searchParams?.lang || "en";

  return (
    <>
      <h1>article {article}</h1>
      <h2>reading in language: {lang}</h2>
    </>
  );
}

