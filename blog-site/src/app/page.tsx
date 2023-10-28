import Posts from "./_components/posts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="btn btn-circle btn-outline btn-primary btn-ghost">Hi</div>
      {/* <Posts /> */}
      <div className="animate-bounce">
        Navigate to antother page via the navbar!
      </div>
    </main>
  );
}
