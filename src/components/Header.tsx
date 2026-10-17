"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Наши работы", href: "/portfolio" },
  { name: "Как мы работаем", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-[#e8e6e0] bg-[#fbfaf7]/95 backdrop-blur-md">
      <nav className="mx-auto w-full max-w-[1800px] px-3 sm:px-6 lg:px-10">
        <div className="flex h-20 items-center justify-between gap-3">
          <Link href="/" className="flex shrink-0 items-center gap-2.5 sm:gap-3" aria-label="ИП Наумович — главная">
            <span className="flex h-10 w-10 items-center justify-center border border-[#24231f] text-[10px] font-semibold tracking-[0.12em] text-[#24231f]">ИПН</span>
            <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#24231f] sm:block">Наумович</span>
          </Link>

          <div className="hidden items-center gap-x-5 xl:flex 2xl:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-xs font-medium text-[#4f4d46] transition-colors hover:text-[#a68a62]">
                {item.name}
              </Link>
            ))}
          </div>

          <div className="ml-auto flex items-center gap-3 sm:gap-5">
            <a href="tel:+375259929001" className="whitespace-nowrap text-[10px] font-semibold tracking-wide text-[#24231f] hover:text-[#9b7950] sm:text-xs md:text-sm">
              +375 25 992-90-01
            </a>
            <Link href="/contacts" className="hidden min-h-11 items-center bg-[#24231f] px-4 text-[10px] font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:bg-[#9b7950] sm:inline-flex">
              Связаться
            </Link>
            <button
              type="button"
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="flex h-10 w-10 shrink-0 items-center justify-center border border-[#d9d6ce] text-lg text-[#24231f] hover:border-[#24231f] xl:hidden"
            >
              {mobileMenuOpen ? "×" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="border-t border-[#e8e6e0] bg-[#fbfaf7] pb-4 xl:hidden">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block border-b border-[#e8e6e0] px-2 py-3.5 text-sm text-[#24231f] hover:text-[#9b7950]">
                {item.name}
              </Link>
            ))}
            <a href="tel:+375259929001" className="mt-4 block px-2 text-sm font-semibold text-[#24231f]">Позвонить: +375 25 992-90-01</a>
          </div>
        )}
      </nav>
    </header>
  );
}