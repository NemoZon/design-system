import { Button } from "../atoms/Button";
import { SectionHeader } from "../atoms/Typography";

export function ButtonShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Buttons" />
      <div className="flex flex-wrap items-center gap-3">
        <Button size="sm" variant="outline">
          Small
        </Button>
        <Button size="md" variant="outline">
          Medium
        </Button>
        <Button size="lg" variant="outline">
          Large
        </Button>
        <Button size="sm" variant="solid">
          Small
        </Button>
        <Button size="md" variant="solid">
          Medium
        </Button>
        <Button size="lg" variant="solid">
          Large
        </Button>
      </div>
    </section>
  );
}
