import api from "@/src/service/api";
import { Metadata } from "next";
import { notFound } from "next/navigation";

interface SlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata> {
  const { slug } = await params;

  const response = await api.get(`/posts?slug=${slug}`);
  const post = response.data[0];
  console.log(post);
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function SlugPage({ params }: SlugProps) {
  const { slug } = await params;

  try {
    const response = await api.get(`/posts?slug=${slug}`);
    const post = response.data[0];
    return <h1>Rota dinâmica: {post.title}</h1>;
  } catch {
    notFound();
  }
}
