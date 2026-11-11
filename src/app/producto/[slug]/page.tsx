import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProductDetail from "@/components/organisms/ProductDetail/ProductDetail";
import JsonLd from "@/components/atoms/JsonLd/JsonLd";
import { PRODUCTS } from "@/constants/products";
import { SITE } from "@/constants/site";

export function generateStaticParams() {
  return PRODUCTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const product = PRODUCTS.find((p) => p.slug === params.slug);
  if (!product) return {};
  const title = `${product.name} aromática de soya`;
  return {
    title,
    description: product.description,
    alternates: { canonical: `/producto/${product.slug}` },
    openGraph: {
      title,
      description: product.description,
      url: `/producto/${product.slug}`,
      images: [{ url: product.image.src, alt: product.name }],
    },
  };
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

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: `${product.name} — Avela Home`,
    description: product.description,
    image: `${SITE.url}${product.image.src}`,
    sku: product.slug,
    brand: { "@type": "Brand", name: SITE.name },
    material: "Cera de soya",
    offers: {
      "@type": "Offer",
      priceCurrency: "COP",
      price: product.price,
      availability: "https://schema.org/InStock",
      url: `${SITE.url}/producto/${product.slug}`,
    },
  };

  return (
    <>
      <JsonLd data={productSchema} />
      <ProductDetail product={product} coleccionParam={searchParams.coleccion} />
    </>
  );
}
