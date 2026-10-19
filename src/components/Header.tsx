"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Главная", href: "/" },
  { name: "Каталог", href: "/catalog" },
  { name: "Портфолио", href: "/portfolio" },
  { name: "Как мы работаем", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLElement | null>(null);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    if (!mobileMenuOpen) return;
    const closeOnOutsidePointer = (event: PointerEvent) => {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("pointerdown", closeOnOutsidePointer);
    return () => document.removeEventListener("pointerdown", closeOnOutsidePointer);
  }, [mobileMenuOpen]);

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
          <Link href="/" className="flex items-center gap-3" onClick={(event) => { setMobileMenuOpen(false); if (pathname === "/") { event.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); } }}>
            <span className="flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden">
              <img src="/favicon.ico" alt="Наумович — главная" className="h-10 w-10 object-contain" />
            </span>
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
              className={`cursor-pointer p-2 text-xl leading-none transition-colors ${textColor}`}
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="fixed inset-0 z-[60] flex justify-end lg:hidden" onClick={() => setMobileMenuOpen(false)}>
            <button
              type="button"
              aria-label="Закрыть меню"
              onClick={(event) => { event.stopPropagation(); setMobileMenuOpen(false); }}
              className="absolute inset-0 h-full w-full cursor-pointer bg-black/35"
            />
            <aside ref={mobileMenuRef} onClick={(event) => event.stopPropagation()}
              className="absolute inset-y-0 right-0 flex h-[100dvh] w-[85%] max-w-md flex-col justify-start gap-2 overflow-y-auto overscroll-contain border-l border-white/15 bg-[#29313a]/90 px-6 py-2 text-white shadow-2xl backdrop-blur-md sm:px-8 sm:py-3">
                            <nav aria-label="Основные разделы сайта" className="shrink-0 border-b border-white/25 pb-3">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group flex items-center justify-between py-1.5 text-base font-semibold transition-colors hover:text-white/70 ${pathname === item.href || (item.href !== "/" && pathname.startsWith(`${item.href}/`)) ? "text-red-400" : "text-white"}`}
                  >
                    <span>{item.name}</span>
                    <span aria-hidden="true" className="text-lg text-white/50 transition-transform group-hover:translate-x-1">→</span>
                  </Link>
                ))}
              </nav>

              <section className="shrink-0 space-y-1 py-1" aria-label="Телефоны">
                <a href="tel:+375259929001" className="block text-xl font-semibold tracking-tight [font-family:'Comic_Sans_MS','Comic_Sans',cursive] transition-colors hover:text-white/70">+375 (25) 992-90-01</a>
                <a href="tel:+375447744449" className="block text-xl font-semibold tracking-tight [font-family:'Comic_Sans_MS','Comic_Sans',cursive] transition-colors hover:text-white/70">+375 (44) 774-44-49</a>
              </section>

              <section className="shrink-0 py-1" aria-label="Адрес">
                <p className="text-base font-medium leading-snug text-white/90">Меньковский тракт 21<br />Щомыслицкий сельсовет</p>
              </section>

              <section className="shrink-0 py-1" aria-label="График">
                <p className="text-base font-medium text-white/90">Пн–Пт с 9:00 до 18:00</p>
              </section>

              <section className="shrink-0 py-1" aria-label="Контакты">
                <div className="flex items-center gap-5 text-white">
                  <a href="https://www.instagram.com/vintazh100" target="_blank" rel="noopener noreferrer" aria-label="Instagram" title="Instagram" className="cursor-pointer transition-opacity hover:opacity-50">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
                  </a>
                  <a href="https://t.me/+375259929001" target="_blank" rel="noopener noreferrer" aria-label="Telegram" title="Telegram" className="cursor-pointer transition-opacity hover:opacity-50">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true"><path d="M21.4 4.6 18.2 20c-.2 1.1-.8 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.4-.1-.6-.6-.2L6.1 13.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20 3.4c.9-.3 1.7.2 1.4 1.2Z"/></svg>
                  </a>
                  <a href="viber://chat?number=%2B375259929001" aria-label="Viber" title="Viber" className="cursor-pointer transition-opacity hover:opacity-50">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3.5C2.8 4.5 2.7 7.1 3.4 9.4c1.6 5.1 6.1 9.6 11.2 11.2 2.3.7 4.9.6 5.9-1.6l.5-1.1-5-2.4-1.6 2-1.4-.6a13 13 0 0 1-5.5-5.5l-.6-1.4 2-1.6-2.4-5L5 3.5Z"/><path d="M13 5a6 6 0 0 1 6 6M13 8a3 3 0 0 1 3 3"/></svg>
                  </a>
                  <a href="tel:+375259929001" aria-label="Телефон" title="Телефон" className="cursor-pointer transition-opacity hover:opacity-50">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 16.5v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 10.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 1.9 3.2 2 2 0 0 1 3.9 1h3a2 2 0 0 1 2 1.7l.5 2.8a2 2 0 0 1-.6 1.9L7 9.2a16 16 0 0 0 6 6l1.8-1.8a2 2 0 0 1 1.9-.6l2.8.5a2 2 0 0 1 1.5 3.2Z"/></svg>
                  </a>
                  <a href="mailto:info@naumovich.by" aria-label="Электронная почта" title="Email" className="cursor-pointer transition-opacity hover:opacity-50">
                    <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 6-10 7L2 6"/></svg>
                  </a>
                </div>
                
              </section>

              <Link
                href="/contacts"
                onClick={() => setMobileMenuOpen(false)}
                className="group inline-flex min-h-12 w-full shrink-0 cursor-pointer items-center justify-center gap-4 border border-white bg-transparent px-7 py-3 text-center text-xs font-medium uppercase tracking-[0.16em] text-white transition-all duration-300 hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
              >
                Связаться с нами <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
              </Link>
            </aside>
          </div>
        )}
      </nav>
    </header>
  );
}
