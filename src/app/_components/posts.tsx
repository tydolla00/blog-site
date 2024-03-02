import { getPostsMeta } from "@/lib/blogposts";
import { type Meta } from "../../../types";
import Link from "next/link";
import { H1, H2 } from "./blog-components";
import { cn } from "@/lib/utils";

export default async function Posts() {
  const posts = await getPostsMeta();
  console.log({ posts });
  if (!posts) return <p>No Posts available</p>;

  return (
    <div className="min-h-[100vh] bg-black">
      <div className="mt-6 mx-auto max-w-2xl">
        <H1 text="Blog Posts" />
        <ul className="w-full list-none">
          {posts.map((post) => (
            <li key={post.id} className="flex space-y-3">
              <Post key={post.id} post={post} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export const Post = ({ post }: { post: Meta }) => {
  const { id, title, date } = post;
  console.log(post);

  return (
    <div className="group w-full">
      <div className="hover:bg-gray-900 rounded-lg p-4">
        <Link href={`/posts/${id}`}>
          <div className="group-hover:underline">
            <H2 text={title} />
          </div>
          <p className="text-base mb-2 text-accent text-ellipsis">
            {post.description}
          </p>
        </Link>
        <div className="flex text-sm text-gray-400 space-x-2">
          <p>Tags:</p>
          {post.tags.map((tag) => (
            <Tag tag={tag} />
          ))}
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export const Tag = ({
  tag,
  className,
}: {
  tag: string;
  className?: string;
}) => (
  <Link
    key={tag}
    href={`/tags/${tag}`}
    className={cn(
      "badge badge-outline p-2 badge-xs hover:text-white cursor-pointer",
      className
    )}
    title={`Visit related ${tag} articles`}
  >
    {tag}
  </Link>
);
