import { Suspense } from "react";

import SpinLoading from "../components/spinLoading/SpinLoading";
import Container from "../components/container/Container";
import Header from "../components/Header/Header";

import PostList from "../components/PostList/PostList";

export default function Home() {
  return (
    <Container>
      <Header />

      <PostList></PostList>
      <Suspense fallback={<SpinLoading />}></Suspense>
      <footer>
        <p>rodapé</p>
      </footer>
    </Container>
  );
}
