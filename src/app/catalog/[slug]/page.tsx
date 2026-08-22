import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { facades, getFacade } from "@/data/facades";
import CatalogClient from "./CatalogClient";

export function generateStaticParams() {
  return facades
    .filter((f) => !f.category.startsWith("work_")) // Только товары каталога
    .map((f) => ({ slug: f.slug }));
}

export default async function CatalogItemPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const item = getFacade(slug);

  if (!item) {
    return notFound();
  }

  return <CatalogClient item={item} allFacades={facades} />;
}