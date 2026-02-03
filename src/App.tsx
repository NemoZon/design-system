import { Button } from "./components/atoms/Button";
import {
  BodyExtraSmall,
  BodyLarge,
  BodyMedium,
  BodySmall,
  H1,
  H2,
  H3,
  H4,
} from "./components/atoms/Typography";

function App() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <section className="grid gap-12 lg:grid-cols-2">
          <div className="flex flex-col justify-end gap-6 text-zinc-200">
            <BodyLarge>Body-large</BodyLarge>
            <BodyMedium>Body-medium</BodyMedium>
            <BodySmall>Body-small</BodySmall>
            <BodyExtraSmall>Body-extra-small</BodyExtraSmall>
          </div>
          <div className="space-y-4 text-right">
            <H1>Header 1</H1>
            <H2>Header 2</H2>
            <H3>Header 3</H3>
            <H4>Header 4</H4>
          </div>
        </section>
        <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
          <p className="text-xs uppercase tracking-[0.3em] text-zinc-500">
            Buttons
          </p>
          <div className="flex w-full flex-col gap-6">
            <Button className="w-full" size="lg" variant="outline">
              Button
            </Button>
            <Button className="w-[150px]" size="sm" variant="solid">
              Button
            </Button>
          </div>
        </section>
      </div>
    </main>
  );
}

export default App;
