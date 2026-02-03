export type Product = {
  id: string;
  name: string;
  description: string;
  price: string;
  image: string;
};

export const mockProducts: Product[] = [
  {
    id: "p1",
    name: "Noir Chair",
    description: "Matte metal with a warm, focused glow.",
    price: "$120",
    image: "https://images.unsplash.com/photo-1501045661006-fcebe0257c3f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p2",
    name: "Slate Chair",
    description: "Soft curve, sturdy frame, minimal silhouette.",
    price: "$240",
    image: "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p3",
    name: "Mono Vase",
    description: "Textured ceramic with a deep graphite finish.",
    price: "$64",
    image: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "p4",
    name: "Carbon Desk",
    description: "Clean lines with a refined, quiet presence.",
    price: "$680",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800&q=80",
  },
];
