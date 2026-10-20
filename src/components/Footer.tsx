import Link from "next/link";

const navigation = [
  { name: "Каталог фасадов и мебели", href: "/catalog" },
  { name: "Фрезерованные фасады", href: "/catalog/milled" },
  { name: "Интегрированные ручки", href: "/catalog/handles" },
  { name: "Портфолио проектов", href: "/portfolio" },
  { name: "Производство", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

const contactLinks = [
  { label: "+375 25 992-90-01", href: "tel:+375259929001", phone: true },
  { label: "+375 44 774-44-49 · директор", href: "tel:+375447744449", phone: true },
  { label: "@vintazh100 · Instagram", href: "https://www.instagram.com/vintazh100", external: true },
  { label: "Telegram", href: "https://t.me/+375259929001", external: true },
  { label: "Viber", href: "viber://chat?number=%2B375259929001" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#3B3D37] bg-[#202322] text-[#E9E8E3]">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-12 sm:px-8 sm:py-14 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.15fr_0.9fr_1.15fr_0.9fr] lg:gap-12">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-[#C65D32] text-xs font-semibold tracking-[0.15em] text-[#E9E8E3]">ИПН</span>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-[#E9E8E3]">Наумович</span>
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-7 text-[#C5C6C1]">
              Изготовление фасадов из МДФ, мебельных деталей и мебели на заказ. Подбор фрезеровки, цвета и отделки под ваш проект.
            </p>
            <Link href="/catalog" className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#E16A3A] transition-colors hover:text-[#F08A60]">
              Смотреть каталог <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <nav aria-label="Разделы сайта">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E9E8E3]">Разделы сайта</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="text-sm text-[#C5C6C1] transition-colors hover:text-[#E16A3A]">{item.name}</Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#202322]">Связаться с нами</p>
            <ul className="mt-5 space-y-4 text-sm text-[#C5C6C1]">
              {contactLinks.map((item) => (
                <li key={item.label}>
                  <a href={item.href} {...("external" in item && item.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className={item.phone ? "inline-block text-base font-semibold tracking-wide text-[#E9E8E3] transition-colors hover:text-[#E16A3A] sm:text-lg" : "transition-colors hover:text-[#C65D32]"}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#202322]">Производство</p>
            <address className="mt-5 text-sm not-italic leading-6 text-[#C5C6C1]">
              Меньковский тракт, 21<br />Щомыслицкий сельсовет
            </address>
            <div className="mt-5">
              <p className="text-sm font-medium text-[#E9E8E3]">График работы</p>
              <p className="mt-2 text-sm leading-6 text-[#C5C6C1]">Пн–Пт: 9:00–18:00<br />Сб: 10:00–15:00</p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-[#3B3D37] pt-6 text-xs text-[#A7A49C] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} ИП Наумович. Все права защищены.</p>
          <Link href="/privacy" className="transition-colors hover:text-[#E16A3A]">Политика конфиденциальности</Link>
          <p>УНП 193843566</p>
        </div>
      </div>
    </footer>
  );
}
