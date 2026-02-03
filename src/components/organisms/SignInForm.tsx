import { Button } from "../atoms/Button";
import { FormField } from "../molecules/FormField";

export function SignInForm() {
  return (
    <form className="flex w-full flex-col gap-8">
      <div className="flex flex-col gap-6">
        <FormField
          label="Email"
          required
          placeholder="example@gmail.com"
          type="email"
        />
        <FormField
          label="Password"
          required
          placeholder="MyPa55word"
          type="password"
        />
      </div>
      <Button className="w-full" size="lg" variant="solid" type="submit">
        Sign In
      </Button>
    </form>
  );
}
