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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <nav className="w-full px-5 sm:px-8 lg:px-12">
        <div className="flex h-20 items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center border border-gray-900 text-xs font-semibold tracking-[0.15em] text-gray-900">ИПН</span>
            <span className="hidden text-sm font-medium uppercase tracking-[0.2em] text-gray-900 md:block">Наумович</span>
          </Link>

          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-gray-900 hover:text-gray-500 transition-colors">
                {item.name}
              </Link>
            ))}
          </div>

          <a href="tel:+375259929001" className="hidden text-sm font-semibold text-gray-900 hover:text-gray-500 lg:block">
            +375 25 992-90-01
          </a>

          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="lg:hidden p-2 text-gray-700">
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-gray-50 pb-4">
            {navigation.map((item) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="block px-5 py-3 font-medium text-gray-900 border-b border-gray-200">
                {item.name}
              </Link>
            ))}
            <div className="px-5 pt-4 font-semibold">+375 25 992-90-01</div>
          </div>
        )}
      </nav>
    </header>
  );
}