import clsx from "clsx";
export default function Header() {
  return (
    <header>
      <h1
        className={clsx(
          "text-4xl font-extrabold py-8",
          "sm:text-5xl sm:py-9",
          "md:text-6xl md:py-10",
          "lg:text-7xl lg:py-11",
        )}
      >
        <a href="#">The Blog</a>
      </h1>
    </header>
  );
}
