import { SignInForm } from "../organisms/SignInForm";
import { SignInTemplate } from "../templates/SignInTemplate";

export type SignInPageProps = {
  className?: string;
  contentClassName?: string;
};

export function SignInPage({ className, contentClassName }: SignInPageProps) {
  return (
    <SignInTemplate
      title="Sign In"
      className={className}
      contentClassName={contentClassName}
    >
      <SignInForm />
    </SignInTemplate>
  );
}
