import { cn } from "@/lib/utils";
export const GradientText = ({
  children,
  size = "base",
}: {
  children: React.ReactNode;
  size?: SizeProps;
}) => (
  <span
    className={cn(
      "text-transparent bg-clip-text bg-gradient-to-r from-white from-20% to-60% to-[#0a74dd] font-extrabold group",
      `text-${size}`
    )}
  >
    {children}
  </span>
);

type SizeProps = "base" | "xl" | "2xl" | "3xl" | "4xl";
