import { Button } from "../atoms/Button";
import { Input } from "../atoms/Input";
import { H2 } from "../atoms/Typography";

export function SignInForm() {
  return (
    <form className="flex w-[400px] max-w-xl flex-col gap-8">
      <H2 className="text-4xl font-light text-white sm:text-5xl">Sign In</H2>
      <div className="flex flex-col gap-6">
        <Input
          label="Email"
          required
          placeholder="example@gmail.com"
          type="email"
        />
        <Input
          label="Password"
          required
          placeholder="example@gmail.com"
          type="password"
        />
      </div>
      <Button className="w-full" size="sm" variant="solid" type="submit">
        Sign In
      </Button>
    </form>
  );
}
