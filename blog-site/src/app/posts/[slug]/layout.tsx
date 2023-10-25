import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shadcn/ui/tooltip";
import Link from "next/link";
import React from "react";

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <section className="sticky top-20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger className="md:hidden absolute right-4">
              {/* hyrdation error */}
              <button className="btn btn-circle btn-outline btn-error btn-ghost">
                ^
              </button>
            </TooltipTrigger>
            <TooltipContent>
              <TableOfContents />
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </section>
      <div className="grid grid-cols-4 w-screen md:p-32 p-10 gap-7">
        <div className="col-span-4 md:col-span-3 space-y-3">{children}</div>
        <section className="relative hidden md:block">
          <ul className="sticky top-28 text-gray-400 border p-2">
            <TableOfContents />
          </ul>
        </section>
      </div>
    </>
  );
}

const TableOfContents = () => (
  <>
    <p className="font-bold">Table of Contents</p>
    <Link className="block hover:underline hover:text-blue-400" href="#caching">
      What is caching?
    </Link>
    <Link
      className="block hover:underline hover:text-blue-400"
      href="#keypoints"
    >
      Four key points of caching in Next
    </Link>
    <Link className="block hover:underline hover:text-blue-400" href="#request">
      Request Memoization
    </Link>
  </>
);
