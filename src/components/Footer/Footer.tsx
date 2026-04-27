import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex justify-center pt-16 pb-4">
      <span>Copyright &copy; {new Date().getFullYear()} - </span>
      <Link href={"/"}>The Blog</Link>
    </footer>
  );
}
