import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { facades, getFacade } from "@/data/facades";
import PortfolioClient from "./PortfolioClient"; // Выносим клиентскую часть

// Генерация статических страниц (чтобы Next.js знал, какие страницы есть)
export function generateStaticParams() {
  return facades
    .filter((f) => f.category.startsWith("work_"))
    .map((f) => ({ slug: f.slug }));
}

// Серверная компонента (получает данные)
export default async function PortfolioItemPage({
  params,
}: {
  params: Promise<{ slug: string }>; // <-- ВАЖНО: Promise в Next.js 15+
}) {
  // Ждем получения параметров
  const { slug } = await params;
  
  // Ищем товар
  const item = getFacade(slug);

  if (!item) {
    return notFound();
  }

  // Передаем данные в клиентский компонент (где будет галерея)
  return <PortfolioClient item={item} allFacades={facades} />;
}