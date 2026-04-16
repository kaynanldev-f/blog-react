import { Suspense } from "react";

import SpinLoading from "../components/spinLoading/SpinLoading";
import Container from "../components/container/Container";
import Header from "../components/Header/Header";
import PostHeading from "../components/PostHeading/PostHeading";
import PostImageCover from "../components/PostImageCover/PostImageCover";
import PostList from "../components/PostList/PostList";

export default function Home() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <PostImageCover
          href="#"
          src="/images/bryen_9.png"
          alt="image"
          w={1280}
          h={720}
        ></PostImageCover>
        <div className="flex flex-col gap-4 sm:justify-center">
          <time className="text-slate-600 text-sm/tight" dateTime="2026-04-08">
            08/04/2026 19:00
          </time>
          <PostHeading url="#" as="h1">
            Lorem ipsum dolor sit amet consectetur
          </PostHeading>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ut
            eos quaerat, quas fugit accusantium. Iusto eligendi doloremque odio
            architecto, labore ratione facere fugiat consequuntur quasi tempore
            ad illum.
          </p>
        </div>
      </section>
      <PostList></PostList>
      <Suspense fallback={<SpinLoading />}></Suspense>
      <footer>
        <p>rodapé</p>
      </footer>
    </Container>
  );
}
