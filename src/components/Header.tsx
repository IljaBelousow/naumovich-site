"use client";

import { useEffect, useState } from "react";
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
  const [scrolled, setScrolled] = useState(false);
  const isHome = usePathname() === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const transparentHeader = isHome && !scrolled;
  const textColor = transparentHeader ? "text-white" : "text-gray-900";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        transparentHeader
          ? "border-b border-white/10 bg-gradient-to-b from-black/45 to-transparent"
          : "border-b border-gray-200/80 bg-white/95 shadow-sm backdrop-blur-md"
      }`}
    >
      <nav className="relative w-full px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3" onClick={() => setMobileMenuOpen(false)}>
            <span className={`flex h-10 w-10 items-center justify-center border text-xs font-semibold tracking-[0.15em] ${transparentHeader ? "border-white/80 text-white" : "border-gray-900 text-gray-900"}`}>ИПН</span>
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

          <div className="flex items-center gap-4 lg:hidden">
            <div className={`flex items-center gap-3 ${textColor}`} aria-label="Связаться с нами">
            <a href="https://www.instagram.com/vintazh100" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="transition-opacity hover:opacity-60">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://t.me/+375259929001" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram" className="transition-opacity hover:opacity-60">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="currentColor" aria-hidden="true"><path d="M21.4 4.6 18.2 20c-.2 1.1-.8 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.4-.1-.6-.6-.2L6.1 13.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20 3.4c.9-.3 1.7.2 1.4 1.2Z"/></svg>
            </a>
            <a href="viber://chat?number=%2B375259929001" aria-label="Viber" title="Viber" className="transition-opacity hover:opacity-60">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3.5C2.8 4.5 2.7 7.1 3.4 9.4c1.6 5.1 6.1 9.6 11.2 11.2 2.3.7 4.9.6 5.9-1.6l.5-1.1-5-2.4-1.6 2-1.4-.6a13 13 0 0 1-5.5-5.5l-.6-1.4 2-1.6-2.4-5L5 3.5Z"/><path d="M13 5a6 6 0 0 1 6 6M13 8a3 3 0 0 1 3 3"/></svg>
            </a>
            <a href="tel:+375259929001" aria-label="Позвонить" title="Позвонить" className="transition-opacity hover:opacity-60">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.9 3.2 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7 9.2a16 16 0 0 0 6 6l1.8-1.8a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.5 3.2Z"/></svg>
            </a>
            <a href="mailto:info@naumovich.by" aria-label="Написать на почту" title="Email" className="transition-opacity hover:opacity-60">
              <svg viewBox="0 0 24 24" className="h-[18px] w-[18px]" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
            </a>
            </div>

            <button
              type="button"
              aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"}
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 text-xl leading-none transition-colors ${textColor}`}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
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
