import { SectionHeader } from "../atoms/Typography";

export function PaletteShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Palette" />
      <div className="grid gap-6">
        <div className="grid grid-cols-5 overflow-hidden rounded border border-white/15">
          <div className="h-20 bg-ink-900" />
          <div className="h-20 bg-ink-800" />
          <div className="h-20 bg-ink-700" />
          <div className="h-20 bg-ink-600" />
          <div className="h-20 bg-ink-500" />
        </div>
        <div className="grid grid-cols-5 overflow-hidden rounded border border-white/15">
          <div className="h-20 bg-mist-900" />
          <div className="h-20 bg-mist-800" />
          <div className="h-20 bg-mist-700" />
          <div className="h-20 bg-mist-600" />
          <div className="h-20 bg-mist-500" />
        </div>
        <div className="grid grid-cols-5 overflow-hidden rounded border border-white/15">
          <div className="h-20 bg-crimson-900" />
          <div className="h-20 bg-crimson-800" />
          <div className="h-20 bg-crimson-700" />
          <div className="h-20 bg-crimson-600" />
          <div className="h-20 bg-crimson-500" />
        </div>
        <div className="grid grid-cols-5 overflow-hidden rounded border border-white/15">
          <div className="h-20 bg-navy-900" />
          <div className="h-20 bg-navy-800" />
          <div className="h-20 bg-navy-700" />
          <div className="h-20 bg-navy-600" />
          <div className="h-20 bg-navy-500" />
        </div>
      </div>
    </section>
  );
}
