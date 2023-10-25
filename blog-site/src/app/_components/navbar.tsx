import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-slate-800 backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <span className="text-3xl font-semibold">Logo</span>
          <div className="flex space-x-4">
            <Link href="/blog">Blog</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/projects">Projects</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
