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
      <div className="max-w-sm sm:max-w-xl lg:max-w-4xl mx-auto my-10">
        <div className="space-y-3">{children}</div>
      </div>
    </>
  );
}
