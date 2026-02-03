import { SignInForm } from "./SignInForm";
import { SectionHeader } from "../atoms/Typography";

export function SignInShowcase() {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Sign In Form" />
      <SignInForm />
    </section>
  );
}
