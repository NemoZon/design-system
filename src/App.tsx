import { Button } from "./components/atoms/Button";

function App() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-zinc-950 px-6 py-16 text-white">
      <section className="flex w-full max-w-3xl flex-col items-center gap-8">
        <div className="space-y-3 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">
            Design System
          </p>
          <h1 className="text-4xl font-light tracking-wide sm:text-5xl">
            Atomic Button
          </h1>
        </div>
        <div className="flex w-full flex-col gap-6">
          <Button size="sm" variant="outline">
            Button
          </Button>
          <Button size="sm" variant="solid">
            Button
          </Button>
        </div>
      </section>
    </main>
  );
}

export default App;
