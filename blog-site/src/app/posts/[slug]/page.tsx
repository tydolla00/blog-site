import { getPostsMeta, getPostByName } from "@/lib/blogposts";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";

export const revalidate = 0;
// add metadata for the title.

type Props = { params: { slug: string } };

const getPosts = async () => {
  const posts = await getPostsMeta();

  if (!posts) return [];

  return posts.map((post) => ({ postId: post.id }));
};

const getPost = async ({ params: { slug } }: Props) => {
  const post = await getPostByName(`${slug}.mdx`); //deduped

  if (!post) return { title: "Post Not Found" };
  return { title: post.meta.title };
};

export default async function Post({ params: { slug } }: Props) {
  console.log({ slug });
  //   const posts = await getPosts();
  const post = await getPostByName(`${slug}.mdx`); //deduped

  if (!post) notFound();

  const { meta, content } = post;

  //   published date

  const tags = meta.tags.map((tag, i) => (
    <Link key={i} href={`/tags/${tag}`}>
      {tag}
    </Link>
  ));

  return (
    <>
      <h2 className="text-3xl">{meta.title}</h2>
      <p>{content}</p>
      <div>Related: {tags}</div>
      <Link href="/">Back to home</Link>
    </>
  );
}
