import { getPostsMeta } from "@/lib/blogposts";
import { type Meta } from "../../../types";
import Link from "next/link";

export default async function Posts() {
  const posts = await getPostsMeta();
  console.log({ posts });
  if (!posts) return <p>No Posts available</p>;

  return (
    <div className="mt-6 mx-auto max-w-2xl">
      <h2>Blog Posts</h2>
      <ul className="w-full list-none p-0">
        {posts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </ul>
    </div>
  );
}

export const Post = ({ post }: { post: Meta }) => {
  const { id, title, date } = post;
  console.log(post);
  //   format date 27:59 check github source code.

  return (
    <Link href={`posts/${id}`} className="mt-4 text-2xl">
      {title}
    </Link>
  );
};
