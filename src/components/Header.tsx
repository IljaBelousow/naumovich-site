"use client";

import { useState } from "react";
import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Наши работы", href: "/portfolio" },
  { name: "Производство", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="site-header__nav" aria-label="Главная навигация">
        <Link href="/" className="site-brand" aria-label="ИП Наумович — главная" onClick={() => setMobileMenuOpen(false)}>
          <span className="site-brand__mark">Н.</span>
          <span className="site-brand__name">НАУМОВИЧ<span>МЕБЕЛЬНЫЕ ДЕТАЛИ</span></span>
        </Link>
        <div className="site-header__links">
          {navigation.map((item) => (
            <Link key={item.name} href={item.href}>{item.name}</Link>
          ))}
        </div>
        <div className="site-header__actions">
          <a className="site-header__phone" href="tel:+375259929001" aria-label="Позвонить по номеру +375 25 992-90-01">
            <span>+375 25 992-90-01</span><span className="site-header__phone-label">Связаться с нами</span>
          </a>
          <button type="button" className="site-header__toggle" aria-label={mobileMenuOpen ? "Закрыть меню" : "Открыть меню"} aria-expanded={mobileMenuOpen} onClick={() => setMobileMenuOpen((open) => !open)}>
            <span>{mobileMenuOpen ? "Закрыть" : "Меню"}</span>
            <span className="site-header__toggle-icon" aria-hidden="true"><i /><i /></span>
          </button>
        </div>
      </nav>
      {mobileMenuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__links">
            {navigation.map((item, index) => (
              <Link key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                <span>0{index + 1}</span>{item.name}<span aria-hidden="true">↗</span>
              </Link>
            ))}
          </div>
          <a className="mobile-menu__phone" href="tel:+375259929001">+375 25 992-90-01 <span aria-hidden="true">↗</span></a>
        </div>
      )}
    </header>
  );
}
