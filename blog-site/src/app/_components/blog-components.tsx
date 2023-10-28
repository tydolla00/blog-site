import Image from "next/image";
import Link from "next/link";

export const H1 = ({ id, text }: HeaderProps) => (
  <h1 id={id} className="text-3xl font-bold my-6">
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
    className="object-contain"
    width={800}
    height={800}
    src={`https://raw.githubusercontent.com/tydolla00/blogs/main/images/${src}`}
    alt={alt}
  />
);

export const InfoBlock = ({ children, type }: InfoBlockProps) => {
  let typeName;
  let icon;
  switch (type) {
    case "danger":
      typeName = "bg-red-700";
      icon = "☢️";
      break;
    case "info":
      typeName = "bg-sky-950";
      icon = "ℹ";
      break;
    case "warning":
      typeName = "bg-orange-700 ";
      icon = "⚠";
      break;
  }

  return (
    <div className={`text-white bg-opacity-70 ${typeName}`}>
      <div className="flex items-center space-x-2 p-3 pb-0">
        <div className="p-2 border btn-circle flex justify-center items-center">
          {icon}
        </div>
        <p className="uppercase">{type}</p>
      </div>
      <p className="p-4">{children}</p>
    </div>
  );
};

export const BlueLink = ({ href }: { href: string }) => (
  <Link className="text-sky-400 hover:underline" href={href}>
    {href}
  </Link>
);

type InfoBlockProps = {
  children: React.ReactNode;
  type: "info" | "warning" | "danger";
};

type HeaderProps = { id?: string; text: string };

type ImageProps = { src: string; alt: string };
