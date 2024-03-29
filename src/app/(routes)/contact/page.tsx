import { promises as fs } from "fs";
import MarkdownEditor from "@/app/_components/markdowneditor";
import { redirect } from "next/navigation";

export default async function Contact() {
  if (process.env.NODE_ENV === "production") redirect("/");

  const file = await fs.readFile(
    process.cwd() + "/src/app/(routes)/test/test.txt",
    "ascii"
  );

  return <MarkdownEditor file={file} />;
}
