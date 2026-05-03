import { notFound } from "next/navigation";

import ProductDetail from "@/components/organisms/ProductDetail/ProductDetail";

import { PRODUCTS } from "@/constants/products";
import type { Product } from "@/constants/products";

export { type Product };
export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);

  if (!product) notFound();

  return (
    <>
      <ProductDetail product={product} />
    </>
  );
}
