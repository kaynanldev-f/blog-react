import SpinLoading from "../components/spinLoading/SpinLoading";
import Container from "../components/container/Container";
import Header from "../components/Header/Header";

import { Suspense } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <Container>
      <Header />
      <section className="grid grid-cols-1 gap-8 mb-16 sm:grid-cols-2 group">
        <Link href={"#"} className="w-full h-full overflow-hidden rounded-xl">
          <Image
            className="group-hover:scale-105 transition"
            src="/images/bryen_0.png"
            alt="imagem do titulo"
            width={1200}
            height={720}
          />
        </Link>
        <div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo at ut
            eos quaerat, quas fugit accusantium. Iusto eligendi doloremque odio
            architecto, labore ratione facere fugiat consequuntur quasi tempore
            ad illum.
          </p>
        </div>
      </section>
      <Suspense fallback={<SpinLoading />}></Suspense>
      <footer>
        <p>rodapé</p>
      </footer>
    </Container>
  );
}
