import api from "@/src/service/api";
import { notFound } from "next/navigation";

interface SingleSlugProp {
  slug: string;
}

export default async function SinglePost({ slug }: SingleSlugProp) {
  const response = await api.get(`/posts?slug=${slug}`);
  const post = response.data[0];

  if (!post) {
    notFound();
  }
  return <h1>Rota single: {post.slug}</h1>;
}
