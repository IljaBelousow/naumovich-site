import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Портфолио", href: "/portfolio" },
  { name: "Производство", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__main">
        <div className="site-footer__brand">
          <Link href="/" className="brand-mark brand-mark--footer"><span className="brand-mark__symbol">Н.</span><span className="brand-mark__name">НАУМОВИЧ<small>МЕБЕЛЬНЫЕ ДЕТАЛИ · МДФ</small></span></Link>
          <p>Фасады МДФ, фрезеровка и мебельные детали для проектов, в которых важна каждая линия.</p>
          <span className="site-footer__motto">Форма. Материал. Точность.</span>
        </div>
        <div className="site-footer__column"><p className="site-footer__label">Навигация</p>{navigation.map((item) => <Link key={item.name} href={item.href}>{item.name}</Link>)}</div>
        <div className="site-footer__column"><p className="site-footer__label">Связаться</p><a href="tel:+375259929001">+375 25 992-90-01</a><a href="tel:+375447744449">+375 44 774-44-49</a><p>Меньковский тракт 21,<br />Щомыслицкий сельсовет</p></div>
      </div>
      <div className="site-footer__bottom page-shell"><span>© 2026 ИП Наумович. Все права защищены.</span><span>УНП 193843566</span><Link href="/contacts">Контакты ↗</Link></div>
    </footer>
  );
}