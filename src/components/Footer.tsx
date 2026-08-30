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
    <footer className="border-t border-gray-200 bg-gray-200">
      <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          {/* Бренд */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center border border-gray-900 text-xs font-semibold tracking-[0.15em] text-gray-900">
                ИПН
              </span>
              <span className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
                Наумович
              </span>
            </Link>
            <p className="mt-5 max-w-xs text-base font-light text-gray-600">
              Мебельные детали из МДФ — крашеные и шпонированные. Мебель на заказ.
            </p>
          </div>

          {/* Меню */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
              Меню
            </p>
            <ul className="mt-5 space-y-2">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-base font-light text-gray-600 transition-colors hover:text-gray-900"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Контакты */}
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
              Контакты
            </p>
            <ul className="mt-5 space-y-2 text-base font-light text-gray-600">
              <li>
                <a href="tel:+375259929001" className="transition-colors hover:text-gray-900">
                  +375 25 992-90-01 - Контактый номер телефона
                </a>
              </li>
              <li>
                <a href="tel:+375447744449" className="transition-colors hover:text-gray-900">
                  +375 44 774-44-49 - Директор
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/vintazh100"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gray-900"
                >
                  @vintazh100 - Instagram
                </a>
              </li>
              <li>Меньковский тракт 21, Щомыслицкий сельсовет</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-gray-200 pt-6 text-sm font-light text-gray-500 sm:flex-row sm:justify-between">
          <p>© 2026 ИП Наумович. Все права защищены.</p>
          <p>УНП 193843566</p>
        </div>
      </div>
    </footer>
  );
}
