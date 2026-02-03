import {
  BodyExtraSmall,
  BodyLarge,
  BodyMedium,
  BodySmall,
  H1,
  H2,
  H3,
  H4,
} from "../atoms/Typography";

export function TypographyShowcase() {
  return (
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
  );
}
