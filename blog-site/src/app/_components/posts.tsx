import { getPostsMeta } from "@/lib/blogposts";
import { type Meta } from "../../../types";
import Link from "next/link";
import { H1, H2 } from "./blog-components";

export default async function Posts() {
  const posts = await getPostsMeta();
  console.log({ posts });
  if (!posts) return <p>No Posts available</p>;

  return (
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
  );
}

export const Post = ({ post }: { post: Meta }) => {
  const { id, title, date } = post;
  console.log(post);
  //   format date 27:59 check github source code.

  return (
    <div className="mt-4 group">
      <div className="hover:bg-gray-900 p-4 rounded-lg">
        <Link href={`/posts/${id}`}>
          <div className="group-hover:underline">
            <H2 text={title} />
          </div>
          <p className="text-base mb-2 text-accent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            neque sem, iaculis ut dapibus id, pretium id ipsum. Etiam sit amet
            venenatis neque. Integer quis nunc eget ex mattis fermentum.
            Suspendisse sit amet mi sagittis, consectetur justo ac, posuere
            urna. Ut sit amet arcu lacus. Suspendisse nec ipsum quis lacus
            sollicitudin accumsan ac sed metus. Mauris sit amet nisi nunc. In
            lacinia urna vitae faucibus condimentum. Nam dapibus lobortis mi.
            Nam risus velit, interdum id massa a, auctor mattis justo. Sed quis
            placerat sem.
          </p>
        </Link>
        <div className="flex text-sm text-gray-400 space-x-2">
          <p>Tags:</p>
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/tags/${tag}`}
              className="badge badge-outline p-2 badge-xs hover:text-white cursor-default"
            >
              {tag}
            </Link>
          ))}
          <p>{new Date(date).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};
