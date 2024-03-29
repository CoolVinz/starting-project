export default function MealsDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  return (
    <main>
      <h1>Meal Detail Page!</h1>
      <p>{params.slug}</p>
    </main>
  );
}
