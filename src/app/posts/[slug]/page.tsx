import SinglePost from "@/src/components/SinglePost/SinglePost";
import SpinLoading from "@/src/components/spinLoading/SpinLoading";
import api from "@/src/service/api";
import { Metadata } from "next";
import { Suspense } from "react";

interface SlugProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: SlugProps): Promise<Metadata> {
  const { slug } = await params;

  const response = await api.get(`/posts?slug=${slug}`);
  const post = response.data[0];
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function SlugPage({ params }: SlugProps) {
  const { slug } = await params;

  return (
    <Suspense fallback={<SpinLoading />}>
      <SinglePost slug={slug} />
    </Suspense>
  );
}
