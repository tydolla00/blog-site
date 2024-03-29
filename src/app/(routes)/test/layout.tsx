export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-4 w-screen md:p-32 p-10 gap-7">
      <div className="col-span-4 space-y-3">{children}</div>
      <section className="relative hidden md:block"></section>
    </div>
  );
}
