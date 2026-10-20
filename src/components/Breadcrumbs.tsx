"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { facades } from "@/data/facades";

const names: Record<string, string> = {
  catalog: "Каталог",
  frezerovki: "Фрезеровки",
  portfolio: "Портфолио",
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

  const crumbs = product?.category === "milled"
    ? [
        { name: "Каталог", href: "/catalog" },
        { name: "Фрезерованные фасады", href: "/catalog/milled" },
        { name: product.name, href: pathname },
      ]
    : segments.map((segment, i) => ({
        name: segmentName(segment, segments[i - 1]),
        href: "/" + segments.slice(0, i + 1).join("/"),
      }));

  return (
    <div className="pointer-events-none absolute inset-x-0 top-[5.5rem] z-40 px-5 sm:px-8 lg:px-12 xl:px-16">
      <nav
        aria-label="Хлебные крошки"
        className="pointer-events-auto inline-flex flex-wrap items-center gap-2 rounded-sm bg-black/25 px-3 py-2 text-sm font-medium text-white shadow-sm backdrop-blur-[2px] sm:px-4"
      >
        <Link href="/" className="text-white/80 transition-colors hover:text-white">
          Главная
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            <span className="text-white/60">/</span>
            {i === crumbs.length - 1 ? (
              <span className="text-white">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="text-white/80 transition-colors hover:text-white">
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}