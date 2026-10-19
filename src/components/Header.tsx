"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Наши работы", href: "/portfolio" },
  { name: "Как мы работаем", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isHome = usePathname() === "/";
  const textColor = isHome ? "text-white" : "text-gray-900";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        isHome
          ? "border-b border-white/10 bg-gradient-to-b from-black/45 to-transparent"
          : "border-b border-gray-100 bg-white/95 backdrop-blur-sm"
      }`}
    >
      <nav className="relative w-full px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <span className={`flex h-10 w-10 items-center justify-center border text-xs font-semibold tracking-[0.15em] ${isHome ? "border-white/80 text-white" : "border-gray-900 text-gray-900"}`}>ИПН</span>
            <span className={`hidden text-sm font-medium uppercase tracking-[0.2em] md:block ${textColor}`}>Наумович</span>
          </Link>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className={`text-sm font-medium transition-colors hover:opacity-70 ${textColor}`}>
                {item.name}
              </Link>
            ))}
          </div>

          <a href="tel:+375259929001" className={`hidden text-sm font-semibold transition-opacity hover:opacity-70 lg:block ${textColor}`}>
            +375 25 992-90-01
          </a>

          <button
            type="button"
            aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 text-xl leading-none transition-colors ${textColor}`}
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className={`absolute right-5 top-full mt-2 w-[min(20rem,calc(100vw-2.5rem))] overflow-hidden rounded-sm border shadow-2xl backdrop-blur-xl lg:hidden ${
            isHome
              ? "border-white/20 bg-black/80 text-white"
              : "border-gray-200 bg-white/95 text-gray-900"
          }`}>
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="block border-b border-current/10 px-5 py-4 text-sm font-medium transition-colors hover:bg-current/10"
              >
                {item.name}
              </Link>
            ))}
            <a href="tel:+375259929001" className="block px-5 py-4 text-sm font-semibold">
              +375 25 992-90-01
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}
