import api from "@/src/service/api";
import { notFound } from "next/navigation";
import Image from "next/image";
import PostDate from "../PostDate/PostDate";
import PostHeading from "../PostHeading/PostHeading";
interface SingleSlugProp {
  slug: string;
}

export default async function SinglePost({ slug }: SingleSlugProp) {
  const response = await api.get(`/posts?slug=${slug}`);
  const post = response.data[0];

  if (!post) {
    notFound();
  }
  return (
    <>
      <Image
        src={post.coverImageUrl}
        width={1200}
        height={720}
        alt={post.title}
        className="mb-4"
      />
      <PostHeading as="h2" url="#">
        {post.title}
      </PostHeading>
      <p className="flex items-center gap-1 mt-2">
        {post.author} |
        <span>
          <PostDate date={post.createdAt} />
        </span>
      </p>
    </>
  );
}
