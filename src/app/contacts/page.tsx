import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Контакты — ИП Наумович",
  description:
    "Контакты производства крашеных фасадов МДФ ИП Наумович: телефон, мессенджеры, Instagram, адрес.",
};

export default function ContactsPage() {
  return (
    <main className="w-full bg-[#F1EEE7]">
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[650px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Мастерская по изготовлению мебели и фасадов"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/90 via-[#141716]/55 to-[#141716]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/70 via-transparent to-[#141716]/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-16 pt-32 sm:px-12 sm:pb-20 lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E16A3A]">
            <span className="h-px w-9 bg-[#E16A3A]" /> Контакты · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            <span>Обсудим ваш<br className="hidden sm:block" /> будущий проект.</span>
          </h1>
          <div className="mt-6">
            <p className="about-intro max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Свяжитесь с нами, чтобы обсудить фасады из МДФ, мебель на заказ, материалы и варианты отделки.
            </p>
            <Link href="tel:+375259929001" className="site-button-on-dark group mt-6 inline-flex shrink-0">
              Связаться с нами <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>
      <div className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">

        <div className="mt-14 grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Телефоны и мессенджеры */}
          <div>
            <a
              href="tel:+375259929001"
              className="text-3xl font-light tracking-tight text-gray-900 transition-colors hover:text-[#82745F] sm:text-5xl"
            >
              +375 25 992-90-01
            </a>
            <p className="mt-2 text-base font-normal text-gray-500">
              Основной номер: звонки, Telegram, Viber
            </p>

            <a
              href="tel:+375447744449"
              className="mt-8 block text-2xl font-light tracking-tight text-gray-900 transition-colors hover:text-[#82745F] sm:text-3xl"
            >
              +375 44 774-44-49
            </a>
            <p className="mt-2 text-base font-normal text-gray-500">
              Прямой контакт с директором
            </p>

            <p className="mt-10 max-w-md text-lg font-normal text-gray-600">
              Позвоните или напишите — посчитаем стоимость, подскажем по
              фрезеровкам и цветам.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.instagram.com/vintazh100"
                target="_blank"
                rel="noopener noreferrer"
                className="site-button"
              >
                Instagram
              </a>
              <a
                href="https://t.me/+375259929001"
                target="_blank"
                rel="noopener noreferrer"
                className="site-button"
              >
                Telegram
              </a>
              <a
                href="viber://chat?number=%2B375259929001"
                className="site-button"
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
              <p className="mt-3 text-lg font-normal text-gray-600">
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
                className="mt-3 block text-lg font-normal text-gray-600 transition-colors hover:text-[#82745F]"
              >
                info@naumovich.by
              </a>
            </div>
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
                Режим работы
              </p>
              <p className="mt-3 text-lg font-normal text-gray-600">
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