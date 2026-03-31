import { Suspense } from "react";
import SpinLoading from "../components/spinLoading/SpinLoading";
import Container from "../components/container/Container";

export default function Home() {
  return (
    <Container>
      <h1>Header</h1>
      <Suspense fallback={<SpinLoading />}></Suspense>
      <footer>
        <p>rodapé</p>
      </footer>
    </Container>
  );
}
