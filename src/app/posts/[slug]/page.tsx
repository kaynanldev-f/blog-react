interface SlugProps {
  params: Promise<{ slug: string }>;
}

export default async function SlugPage({ params }: SlugProps) {
  const resolvedSlug = await params;
  return <h1>Rota dinâmica: {resolvedSlug.slug} </h1>;
}
