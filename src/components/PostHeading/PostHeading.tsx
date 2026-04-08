import Link from "next/link";

interface PropsHeading {
  children: React.ReactNode;
  url: string;
  as: "h1" | "h2";
}

export default function PostHeading({ children, url, as: Tag }: PropsHeading) {
  const classMap = {
    h1: "text-2xl font-extrabold sm:text-4xl",
    h2: "text-2xl font-extrabold bg-red-500 sm:text-4xl",
  };
  return (
    <Tag className={classMap[Tag]}>
      <Link href={url}>{children}</Link>
    </Tag>
  );
}
