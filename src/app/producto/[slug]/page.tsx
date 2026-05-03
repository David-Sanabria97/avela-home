import { notFound } from "next/navigation";
import ProductDetail from "@/components/organisms/ProductDetail/ProductDetail";
import { PRODUCTS } from "@/constants/products";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export default function ProductPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { coleccion?: string };
}) {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) notFound();

  return (
    <ProductDetail product={product} coleccionParam={searchParams.coleccion} />
  );
}
