export const metadata = {
  title: "Контакты — ИП Наумович",
  description:
    "Контакты производства крашеных фасадов МДФ ИП Наумович: телефон, мессенджеры, Instagram, адрес.",
};

export default function ContactsPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          Свяжитесь с нами
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
          Контакты
        </h1>

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Телефоны и мессенджеры */}
          <div>
            <a
              href="tel:+375259929001"
              className="text-3xl font-extralight tracking-tight text-gray-900 transition-colors hover:text-gray-500 sm:text-5xl"
            >
              +375 25 992-90-01
            </a>
            <p className="mt-2 text-base font-light text-gray-500">
              Основной номер: звонки, Telegram, Viber
            </p>

            <a
              href="tel:+375447744449"
              className="mt-8 block text-2xl font-extralight tracking-tight text-gray-900 transition-colors hover:text-gray-500 sm:text-3xl"
            >
              +375 44 774-44-49
            </a>
            <p className="mt-2 text-base font-light text-gray-500">
              Прямой контакт с директором
            </p>

            <p className="mt-10 max-w-md text-lg font-light text-gray-600">
              Позвоните или напишите — посчитаем стоимость, подскажем по
              фрезеровкам и цветам.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/vintazh100"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              >
                Instagram
              </a>
              <a
                href="https://t.me/+375259929001"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              >
                Telegram
              </a>
              <a
                href="viber://chat?number=%2B375259929001"
                className="border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              >
                Viber
              </a>
            </div>
          </div>

          {/* Реквизиты */}
          <div className="space-y-10">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
                Адрес производства
              </p>
              <p className="mt-3 text-lg font-light text-gray-600">
                Меньковский тракт 21<br />
                Щомыслицкий сельсовет
              </p>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
                Email
              </p>
              <a
                href="mailto:info@naumovich.by"
                className="mt-3 block text-lg font-light text-gray-600 transition-colors hover:text-gray-900"
              >
                info@naumovich.by
              </a>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
                Режим работы
              </p>
              <p className="mt-3 text-lg font-light text-gray-600">
                Пн–Пт: 9:00–18:00
                <br />
                Сб: 10:00–15:00
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}