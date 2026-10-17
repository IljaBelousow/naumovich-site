import Link from "next/link";

const navigation = [
  { name: "Каталог", href: "/catalog" },
  { name: "Фрезеровки", href: "/frezerovki" },
  { name: "Портфолио", href: "/portfolio" },
  { name: "Производство", href: "/production" },
  { name: "О компании", href: "/about" },
  { name: "Контакты", href: "/contacts" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#34332d] bg-[#24231f] text-white">
      <div className="mx-auto w-full max-w-[1600px] px-5 py-14 sm:px-10 sm:py-16 lg:px-16 xl:px-24">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr] lg:gap-16">
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-white/70 text-[10px] font-semibold tracking-[0.12em] text-white">ИПН</span>
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">Наумович</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/60">
              Крашеные фасады МДФ по индивидуальным размерам. Фрезеровка, подбор цвета и изготовление мебельных деталей.
            </p>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9ad82]">Навигация</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className="text-sm text-white/65 transition-colors hover:text-white">{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-[#c9ad82]">Контакты</p>
            <ul className="mt-5 space-y-3 text-sm leading-6 text-white/65">
              <li><a href="tel:+375259929001" className="hover:text-white">+375 25 992-90-01</a></li>
              <li><a href="tel:+375447744449" className="hover:text-white">+375 44 774-44-49</a></li>
              <li><a href="https://www.instagram.com/vintazh100" target="_blank" rel="noopener noreferrer" className="hover:text-white">@vintazh100 · Instagram</a></li>
              <li className="max-w-xs">Меньковский тракт 21, Щомыслицкий сельсовет</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ИП Наумович. Все права защищены.</p>
          <p>УНП 193843566</p>
        </div>
      </div>
    </footer>
  );
}