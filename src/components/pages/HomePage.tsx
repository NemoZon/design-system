import { mockProducts } from "../../utils/mockProducts";
import { ButtonShowcase } from "../organisms/ButtonShowcase";
import { InputShowcase } from "../organisms/InputShowcase";
import { PagePreviewShowcase } from "../organisms/PagePreviewShowcase";
import { PaletteShowcase } from "../organisms/PaletteShowcase";
import { ProductShowcase } from "../organisms/ProductShowcase";
import { SignInShowcase } from "../organisms/SignInShowcase";
import { TypographyShowcase } from "../organisms/TypographyShowcase";

export function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-950 px-6 py-16 text-white">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-16">
        <TypographyShowcase />
        <PaletteShowcase />
        <ButtonShowcase />
        <InputShowcase />
        <SignInShowcase />
        <PagePreviewShowcase />
        <ProductShowcase products={mockProducts} />
      </div>
    </main>
  );
}
