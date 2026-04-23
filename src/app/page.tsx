import { Suspense } from "react";

import SpinLoading from "../components/spinLoading/SpinLoading";

import PostList from "../components/PostList/PostList";
import PostFeatured from "../components/PostFeatured/PostFeatured";

export default function Home() {
  return (
    <>
      <Suspense fallback={<SpinLoading />}>
        <PostFeatured></PostFeatured>
      </Suspense>
      <Suspense fallback={<SpinLoading />}>
        <PostList></PostList>
      </Suspense>
    </>
  );
}
