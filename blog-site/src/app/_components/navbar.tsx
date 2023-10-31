import Link from "next/link";

// bg-slate-800
export default function Navbar() {
  return (
    <nav className="sticky top-0 z-10 bg-transparent backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-700">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-3xl font-semibold">
            Logo
          </Link>
          <div className="flex space-x-4">
            <Link className="hover:underline" href="/blog">
              Blog
            </Link>
            <Link className="hover:underline" href="/contact">
              Contact
            </Link>
            <Link className="hover:underline" href="/projects">
              Projects
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
