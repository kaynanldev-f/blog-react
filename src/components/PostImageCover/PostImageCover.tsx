import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

interface PostImageProps {
  href: string;
  src: string;
  alt: string;
  w: number;
  h: number;
  linkClass?: string;
  imageClass?: string;
}

export default function PostImageCover({
  href,
  src,
  alt,
  w,
  h,
  linkClass,
  imageClass,
}: PostImageProps) {
  return (
    <Link
      href={href}
      className={clsx("w-full h-full overflow-hidden rounded-xl", linkClass)}
    >
      <Image
        className={clsx(
          "group-hover:scale-105 h-full w-full transition object-cover object-center",
          imageClass,
        )}
        src={src}
        alt={alt}
        width={w}
        height={h}
      />
    </Link>
  );
}
