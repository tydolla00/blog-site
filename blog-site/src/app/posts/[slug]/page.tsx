import { getPostsMeta, getPostByName } from "@/lib/blogposts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import { H1 } from "@/app/_components/blog-components";

export const revalidate = 0;
// add metadata for the title.
// need to revalidate.

export async function generateStaticParams() {
  const posts = await getPostsMeta(); //deduped!
  if (!posts) return [];

  return posts.map((post) => ({
    slug: post.id,
  }));
}

export async function generateMetadata({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); //deduped!

  if (!post) {
    return {
      title: "Post Not Found",
    };
  }

  return {
    title: post.meta.title,
  };
}

type Props = { params: { slug: string } };

export default async function Post({ params: { slug } }: Props) {
  const post = await getPostByName(`${slug}.mdx`); //deduped

  if (!post) notFound();

  const { meta, content } = post;

  //   published date

  const tags = meta.tags.map((tag, i) => (
    <Link
      className="hover:text-underline hover:text-blue-400"
      key={i}
      href={`/tags/${tag}`}
    >
      {tag}
    </Link>
  ));

  return (
    <>
      <H1 text={meta.title} />
      <p className="text-gray-400 space-y-7">{content}</p>
      <div>Related: {tags}</div>
      <Link href="/">Back to home</Link>
    </>
  );
}
