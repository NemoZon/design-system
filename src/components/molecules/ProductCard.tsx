import { Button } from "../atoms/Button";
import { BodySmall, H4 } from "../atoms/Typography";
import type { Product } from "../../utils/mockProducts";

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-zinc-200 bg-white text-zinc-900 shadow-sm dark:border-white/10 dark:bg-zinc-950/60 dark:text-white">
      <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100 dark:bg-zinc-900">
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-4">
        <div className="flex items-start justify-between gap-3">
          <H4 className="text-base sm:text-base">{product.name}</H4>
          <span className="text-sm text-zinc-600 dark:text-zinc-300">{product.price}</span>
        </div>
        <BodySmall className="text-zinc-500 dark:text-zinc-400">{product.description}</BodySmall>
        <div className="mt-auto pt-2">
          <Button className="w-full" size="sm" variant="outline">
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
}
