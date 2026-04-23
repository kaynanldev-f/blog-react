import type { Metadata } from "next";
import "./globals.css";
import Container from "../components/container/Container";
import Header from "../components/Header/Header";

export const metadata: Metadata = {
  title: {
    default: "Início | The Blog",
    template: "%s | The Blog",
  },
  description: "Blog em Next",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <Container>
          <Header />
          {children}
          <footer>
            <p>rodapé</p>
          </footer>
        </Container>
      </body>
    </html>
  );
}
