import { H1 } from "@/app/_components/blog-components";
import { Post } from "@/app/_components/posts";
import { getPostsMeta } from "@/lib/blogposts";
import Link from "next/link";

// add metadata for the title.
export default async function Tags({
  params: { tag },
}: {
  params: { tag: string };
}) {
  const posts = await getPostsMeta();

  if (!posts) return <p className="text-3xl">Sorry no posts are available.</p>;

  const tagPosts = posts.filter((post) => post.tags.includes(tag));

  if (!tagPosts.length) {
    return (
      <div className="text-center">
        <p className="text-2xl">Sorry no posts for {tag} right now...</p>
        <Link href={"/"}>Back to home</Link>
      </div>
    );
  }
  return (
    <div className="mt-6 mx-auto max-w-2xl">
      <H1 text={`Results for: #${tag}`} />
      <ul className="w-full list-none">
        {tagPosts.map((post) => (
          <li key={post.id} className="flex space-y-3">
            <Post key={post.id} post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
