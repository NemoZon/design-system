import { Button } from "../atoms/Button";
import { BodySmall, H4 } from "../atoms/Typography";
import type { Product } from "../../utils/mockProducts";

export type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded border border-white/10 bg-zinc-950/60 text-white shadow-sm">
      <div className="aspect-[4/3] w-full overflow-hidden bg-zinc-900">
        <img
          className="h-full w-full object-cover"
          src={product.image}
          alt={product.name}
          loading="lazy"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <H4 className="text-lg font-light text-white">{product.name}</H4>
          <span className="text-sm text-zinc-300">{product.price}</span>
        </div>
        <BodySmall className="text-zinc-400">{product.description}</BodySmall>
        <div className="mt-auto">
          <Button className="w-full" size="sm" variant="outline">
            Add to cart
          </Button>
        </div>
      </div>
    </article>
  );
}
