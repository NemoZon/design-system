import { Button } from "../atoms/Button";
import { SectionHeader } from "../atoms/Typography";

export function ButtonShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Buttons" />
      <div className="flex w-full flex-col gap-6">
        <Button className="w-full" size="lg" variant="outline">
          Button
        </Button>
        <Button className="w-[150px]" size="sm" variant="solid">
          Button
        </Button>
      </div>
    </section>
  );
}
