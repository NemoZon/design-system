import { SectionHeader } from "../atoms/Typography";
import { SignInPage } from "../pages/SignInPage";

export function PagePreviewShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Page" />
      <div className="overflow-hidden rounded-lg border border-white/10">
        <SignInPage className="min-h-0 py-10" contentClassName="gap-8" />
      </div>
    </section>
  );
}
