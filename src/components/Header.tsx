"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Портфолио", href: "/portfolio" },
  { name: "Производство", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <nav className="site-header__inner" aria-label="Основная навигация">
        <Link href="/" className="brand-mark" aria-label="ИП Наумович — главная">
          <span className="brand-mark__symbol">Н.</span>
          <span className="brand-mark__name">НАУМОВИЧ<small>МЕБЕЛЬНЫЕ ДЕТАЛИ · МДФ</small></span>
        </Link>
        <div className="site-header__links">
          {navigation.map((item) => <Link key={item.name} href={item.href}>{item.name}</Link>)}
        </div>
        <div className="site-header__contact">
          <a href="tel:+375259929001" className="site-header__phone">+375 25 992-90-01</a>
          <Link href="/contacts" className="site-header__button">Обсудить проект <span>↗</span></Link>
          <button type="button" className="site-header__toggle" aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>{mobileMenuOpen ? "×" : "☰"}</button>
        </div>
      </nav>
      {mobileMenuOpen && <div className="site-header__mobile">
        {navigation.map((item) => <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>{item.name}<span>↗</span></Link>)}
        <a href="tel:+375259929001" className="site-header__mobile-phone">Позвонить · +375 25 992-90-01</a>
      </div>}
    </header>
  );
}