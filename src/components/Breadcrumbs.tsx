"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { facades } from "@/data/facades";

const names: Record<string, string> = {
  catalog: "Каталог",
  frezerovki: "Фрезеровки",
  portfolio: "Портфолио",
  production: "Производство",
  about: "О компании",
  contacts: "Контакты",
};

function segmentName(segment: string, prev?: string) {
  if (names[segment]) return names[segment];
  if (prev === "catalog") {
    const facade = facades.find((f) => f.slug === segment);
    if (facade) return facade.name;
  }
  return segment;
}

export default function Breadcrumbs() {
  const pathname = usePathname();
  if (pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  const crumbs = segments.map((segment, i) => ({
    name: segmentName(segment, segments[i - 1]),
    href: "/" + segments.slice(0, i + 1).join("/"),
  }));

  return (
    <div className="w-full bg-white px-5 pt-20 sm:px-8 lg:px-12 xl:px-16">
      <nav
        aria-label="Хлебные крошки"
        className="flex flex-wrap items-center gap-2 py-4 text-sm font-light text-gray-500"
      >
        <Link href="/" className="transition-colors hover:text-gray-900">
          Главная
        </Link>
        {crumbs.map((crumb, i) => (
          <span key={crumb.href} className="flex items-center gap-2">
            <span className="text-gray-300">/</span>
            {i === crumbs.length - 1 ? (
              <span className="text-gray-900">{crumb.name}</span>
            ) : (
              <Link href={crumb.href} className="transition-colors hover:text-gray-900">
                {crumb.name}
              </Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}