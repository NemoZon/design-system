import { ProductGrid } from "./ProductGrid";
import { SectionHeader } from "../atoms/Typography";
import type { Product } from "../../utils/mockProducts";

export type ProductShowcaseProps = {
  products: Product[];
};

export function ProductShowcase({ products }: ProductShowcaseProps) {
  return (
    <section className="flex flex-col gap-6 border-t border-white/10 pt-10">
      <SectionHeader title="Product Cards" />
      <ProductGrid products={products} />
    </section>
  );
}
