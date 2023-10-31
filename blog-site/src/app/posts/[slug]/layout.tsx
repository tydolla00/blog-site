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
            <TooltipTrigger className="absolute right-4">
              {/* hyrdation error */}
              <div className="md:hidden btn btn-circle btn-outline btn-error btn-ghost">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2.5 4C2.22386 4 2 4.22386 2 4.5C2 4.77614 2.22386 5 2.5 5H12.5C12.7761 5 13 4.77614 13 4.5C13 4.22386 12.7761 4 12.5 4H2.5ZM2 7.5C2 7.22386 2.22386 7 2.5 7H12.5C12.7761 7 13 7.22386 13 7.5C13 7.77614 12.7761 8 12.5 8H2.5C2.22386 8 2 7.77614 2 7.5ZM2 10.5C2 10.2239 2.22386 10 2.5 10H12.5C12.7761 10 13 10.2239 13 10.5C13 10.7761 12.7761 11 12.5 11H2.5C2.22386 11 2 10.7761 2 10.5Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                    // fill-rule="evenodd"
                    // clip-rule="evenodd"
                  ></path>
                </svg>
              </div>
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
    <p className="font-bold text-accent">Table of Contents</p>
    <Link className="block hover:underline hover:text-primary" href="#caching">
      What is caching?
    </Link>
    <Link
      className="block hover:underline hover:text-primary"
      href="#keypoints"
    >
      Four key points of caching in Next
    </Link>
    <Link className="block hover:underline hover:text-primary" href="#request">
      Request Memoization
    </Link>
  </>
);
