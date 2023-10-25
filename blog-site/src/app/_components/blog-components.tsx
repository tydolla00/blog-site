import Image from "next/image";

export const H1 = ({ id, text }: HeaderProps) => (
  <h1 id={id} className="text-3xl font-bold">
    {text}
  </h1>
);

export const H2 = ({ id, text }: HeaderProps) => (
  <h2 id={id} className="text-2xl font-semibold">
    {text}
  </h2>
);

export const CustomImage = ({ src, alt }: ImageProps) => (
  <Image
    className="aspect- object-contain"
    width={800}
    height={800}
    src={`https://raw.githubusercontent.com/tydolla00/blogs/main/images/${src}`}
    alt={alt}
  />
);

type HeaderProps = { id?: string; text: string };

type ImageProps = { src: string; alt: string };
