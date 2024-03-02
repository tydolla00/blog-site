import { Separator } from "@/shadcn/ui/separator";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";

export const H1 = ({ id, text }: HeaderProps) => (
  <h1 id={id} className="text-3xl font-bold my-6 text-white">
    {text}
  </h1>
);

export const H2 = ({ id, text }: HeaderProps) => (
  <h2 id={id} className="text-2xl font-semibold text-white">
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
  let bgColor;
  let borderCorlor;
  let icon;
  let textColor;
  switch (type) {
    case "danger":
      bgColor = "bg-red-700";
      borderCorlor = "border-red-700";
      icon = "☢️";
      textColor = "text-red-700";
      break;
    case "info":
      bgColor = "bg-sky-950";
      borderCorlor = "border-sky-950";
      icon = "ℹ";
      textColor = "text-sky-400";
      break;
    case "warning":
      bgColor = "bg-yellow-900";
      borderCorlor = "border-yellow-900";
      icon = "⚠";
      textColor = "text-yellow-500";
      break;
  }

  return (
    <div
      className={cn(
        "text-white bg-opacity-70 my-48 rounded-lg border",
        bgColor,
        borderCorlor
      )}
    >
      <div className="flex items-center space-x-2 p-4 font-extrabold tracking-widest pb-0">
        {/* <div className="p-2 border btn-circle flex justify-center items-center bg-yellow">
          {icon}
        </div> */}
        <p className={cn("uppercase", textColor)}>{type}</p>
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export const BlueLink = ({ href, text }: { href: string; text: string }) => (
  <Link
    className="text-sky-400 hover:underline relative"
    href={href}
    title={href}
  >
    {text}
  </Link>
);

export const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <span className="italic text-amber-300 p-0.5 bg-gray-900 leading">
    {children}
  </span>
);

export const BulletList = ({ list }: { list: string[] }) => (
  <ul className="p-4">
    {list.map((val) => (
      <li key={val} className="list-disc">
        {val}
      </li>
    ))}
  </ul>
);

export const Example = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-black text-white border p-4 border-zinc-400 rounded-lg text-sm">
    <span>Example:</span>
    <Separator className="my-2" />
    <div>{children}</div>
  </div>
);

type InfoBlockProps = {
  children: React.ReactNode;
  type: "info" | "warning" | "danger";
};

export const Code = ({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: string;
}) => {
  return (
    <div className="relative">
      <div className=" bg-slate-950 text-left italic font-semibold rounded-lg w-24 text-primary p-1">
        {lang}
      </div>
      <div>{children}</div>
    </div>
  );
};

type HeaderProps = { id?: string; text: string };

type ImageProps = { src: string; alt: string };
