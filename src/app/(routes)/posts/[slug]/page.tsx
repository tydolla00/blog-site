import { getPostsMeta, getPostByName } from "@/lib/blogposts";
import { notFound } from "next/navigation";
import "highlight.js/styles/github-dark.css";
import { H1, H2, H3 } from "@/app/_components/blog-components";
import { Tag } from "@/app/_components/posts";

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
    <Tag className="badge-md mx-1.5 hover:text-sky-500" key={i} tag={tag} />
  ));

  return (
    <section className="max-h-min">
      <H1 className="mb-0 mt-20" text={meta.title} />
      <p className="text-neutral-content mb-10 mt-2">{meta.date}</p>
      <div className="text-accent space-y-7">{content}</div>
      <H2 className="mt-6 flex items-center" text="Related:">
        {tags}
      </H2>
    </section>
  );
}
