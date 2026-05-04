import api from "@/src/service/api";
import { notFound } from "next/navigation";

interface SlugProps {
  params: Promise<{ slug: string }>;
}

export default async function SlugPage({ params }: SlugProps) {
  const { slug } = await params;

  try {
    const response = await api.get(`/posts?slug=${slug}`);
    const firstPost = response.data[0];
    const post = firstPost;
    return <h1>Rota dinâmica: {post.title}</h1>;
  } catch {
    notFound();
  }
}
