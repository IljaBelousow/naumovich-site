"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { facades } from "@/data/facades";

const names: Record<string, string> = {
  catalog: "Каталог",
  frezerovki: "Фрезеровки",
  portfolio: "Портфолио",
  facades: "Фасады",
  production: "Как мы работаем",
  about: "О компании",
  contacts: "Контакты",
  edge: "Профиль края",
  handles: "Ручки",
  milled: "Фрезерованные фасады",
  furniture: "Мебель",
};

function segmentName(segment: string, prev?: string) {
  // Сначала проверяем статичные названия
  if (names[segment]) return names[segment];
  
  // Ищем во всех данных facades по slug (работает для catalog, portfolio и других)
  const facade = facades.find((f) => f.slug === segment);
  if (facade) return facade.name;
  
  return segment;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const product = segments.length === 2 && segments[0] === "catalog"
    ? facades.find((f) => f.slug === segments[1])
    : undefined;
  const portfolioItem = segments.length === 2 && segments[0] === "portfolio"
    ? facades.find((f) => f.slug === segments[1] && f.category.startsWith("work_"))
    : undefined;

  // На странице отдельной работы портфолио крошки отображаются внутри PortfolioClient.
  // Не показываем глобальный вариант второй раз.
  if (portfolioItem) return null;

  const isLightPage = Boolean(product || portfolioItem);
  const textColor = isLightPage ? "text-[#202322]" : "text-white";
  const mutedColor = isLightPage ? "text-[#202322]/55" : "text-white/60";
  const linkColor = isLightPage ? "text-[#202322]/75 hover:text-[#202322]" : "text-white/80 hover:text-white";

  const crumbs = product?.category === "milled"
    ? [
        { name: "Каталог", href: "/catalog" },
        { name: "Фрезерованные фасады", href: "/catalog/milled" },
        { name: product.name, href: pathname },
      ]
    : portfolioItem
      ? [
          { name: "Портфолио", href: "/portfolio" },
          {
            name: portfolioItem.category === "work_furniture" ? "Мебель" : "Фасады",
            href: portfolioItem.category === "work_furniture" ? "/portfolio/furniture" : "/portfolio/facades",
          },
          { name: portfolioItem.name, href: pathname },
        ]
      : segments.map((segment, i) => ({
          name: segmentName(segment, segments[i - 1]),
          href: "/" + segments.slice(0, i + 1).join("/"),
        }));

  return (
    <div className="pointer-events-none absolute inset-x-0 top-[5.5rem] z-40 px-5 sm:px-8 lg:px-12 xl:px-16">
      <nav
        aria-label="Хлебные крошки"
        className={`pointer-events-auto inline-flex flex-wrap items-center gap-2 border-0 bg-transparent p-0 text-sm font-medium shadow-none outline-none ${textColor}`}
      >
        <Link href="/" className={`transition-colors ${linkColor}`}>
          Главная
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            <span className={mutedColor}>/</span>
            {i === crumbs.length - 1 ? (
              <span className={textColor}>{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className={`transition-colors ${linkColor}`}>
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}