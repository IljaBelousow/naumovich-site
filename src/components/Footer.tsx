import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Фрезеровки", href: "/frezerovki" },
  { name: "Наши работы", href: "/portfolio" },
  { name: "Производство", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="site-footer__top">
          <div>
            <Link href="/" className="site-brand" aria-label="ИП Наумович — главная">
              <span className="site-brand__mark">Н.</span>
              <span className="site-brand__name">НАУМОВИЧ<span>МЕБЕЛЬНЫЕ ДЕТАЛИ</span></span>
            </Link>
            <p className="site-footer__description">Крашеные и шпонированные мебельные детали из МДФ. Индивидуальные решения для ваших проектов.</p>
          </div>
          <div>
            <p className="site-footer__title">Навигация</p>
            <ul className="site-footer__links">
              {navigation.map((item) => <li key={item.name}><Link href={item.href}>{item.name}</Link></li>)}
            </ul>
          </div>
          <div>
            <p className="site-footer__title">Связаться с нами</p>
            <ul className="site-footer__contacts">
              <li><a href="tel:+375259929001">+375 25 992-90-01</a></li>
              <li><a href="tel:+375447744449">+375 44 774-44-49 · Директор</a></li>
              <li><a href="https://www.instagram.com/vintazh100" target="_blank" rel="noopener noreferrer">Instagram · @vintazh100</a></li>
              <li>Меньковский тракт 21, Щомыслицкий сельсовет</li>
            </ul>
          </div>
        </div>
        <div className="site-footer__bottom">
          <span>© {new Date().getFullYear()} ИП Наумович. Все права защищены.</span>
          <span>УНП 193843566</span>
        </div>
      </div>
    </footer>
  );
}
