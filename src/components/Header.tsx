"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Фрезеровки", href: "/frezerovki" },
  { name: "Портфолио", href: "/portfolio" },
  { name: "Как мы работаем", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          {/* Логотип */}
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-gray-900 text-xs font-semibold tracking-[0.15em] text-gray-900">
              ИПН
            </span>
            <span className="hidden text-sm font-medium uppercase tracking-[0.2em] text-gray-900 md:block">
              Наумович
            </span>
          </Link>

          {/* Десктопное меню */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-gray-900 transition-colors duration-200 hover:text-gray-500"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Телефон */}
          <a
            href="tel:+375259929001"
            className="hidden text-sm font-semibold text-gray-900 transition-colors duration-200 hover:text-gray-500 lg:block"
          >
            +375 25 992-90-01
          </a>

          {/* Мобильная кнопка */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none lg:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Открыть меню</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>

        {/* Мобильное меню */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t-2 border-gray-300 bg-gray-100">
            <div className="pb-4 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block border-b border-gray-300 px-5 py-3 text-base font-medium text-gray-900 hover:bg-gray-200 active:bg-gray-200"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-5 pt-4">
                <a
                  href="tel:+375259929001"
                  className="block text-base font-semibold text-gray-900"
                >
                  +375 25 992-90-01
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}