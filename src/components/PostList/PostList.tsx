"use client";

import { useEffect, useState } from "react";
import api from "@/src/service/api";
import { PostModels } from "@/src/models/posts/post-models";
import PostImageCover from "../PostImageCover/PostImageCover";
import PostHeading from "../PostHeading/PostHeading";
import { formatRelativeDate, fulldateTime } from "@/src/utils/post-dateTime";
export default function PostList() {
  const [posts, setPosts] = useState<PostModels[]>([]);

  useEffect(() => {
    async function getPost() {
      try {
        const response = await api.get("/posts");
        const data = response.data;
        setPosts(data);
      } catch {
        console.log("erro ao requisitar posts");
      }
    }

    getPost();
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1  gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => {
          return (
            <div className="flex flex-col gap-4 group" key={post.id}>
              <PostImageCover
                href={`/post/${post.slug}`}
                w={1280}
                h={720}
                src={post.coverImageUrl}
                alt={post.title}
              />

              <div className="flex flex-col gap-4 sm:justify-center">
                <time
                  className="text-slate-600 block text-sm/tight"
                  dateTime={post.createdAt}
                  title={formatRelativeDate(post.createdAt)}
                >
                  {fulldateTime(post.createdAt)}
                </time>

                <PostHeading as="h2" url="#">
                  {post.title}
                </PostHeading>

                <p>{post.excerpt}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
