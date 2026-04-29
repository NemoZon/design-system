import { mockProducts } from "../../utils/mockProducts";
import { ThemeToggle } from "../atoms/ThemeToggle";
import { ButtonShowcase } from "../organisms/ButtonShowcase";
import { InputShowcase } from "../organisms/InputShowcase";
import { PagePreviewShowcase } from "../organisms/PagePreviewShowcase";
import { PaletteShowcase } from "../organisms/PaletteShowcase";
import { ProductShowcase } from "../organisms/ProductShowcase";
import { SignInShowcase } from "../organisms/SignInShowcase";
import { TypographyShowcase } from "../organisms/TypographyShowcase";
import { UserCardShowcase } from "../organisms/UserCardShowcase";

export function HomePage() {
  return (
    <main className="min-h-screen bg-white px-6 py-16 text-zinc-900 transition-colors dark:bg-zinc-950 dark:text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <header className="flex items-center justify-end">
          <ThemeToggle />
        </header>
        <TypographyShowcase />
        <PaletteShowcase />
        <ButtonShowcase />
        <UserCardShowcase />
        <InputShowcase />
        <SignInShowcase />
        <PagePreviewShowcase />
        <ProductShowcase products={mockProducts} />
      </div>
    </main>
  );
}
