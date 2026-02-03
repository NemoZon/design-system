import { Input } from "../atoms/Input";
import { SectionHeader } from "../atoms/Typography";

export function InputShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Input" />
      <Input
        containerClassName="w-[400px]"
        label="Email"
        required
        placeholder="example@gmail.com"
        type="email"
      />
    </section>
  );
}
