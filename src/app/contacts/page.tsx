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
      <section className="relative isolate flex min-h-[500px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[590px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Мастерская по изготовлению мебели и фасадов"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_60%] opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/75 via-[#141716]/35 to-[#141716]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/50 via-transparent to-[#141716]/10" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-14 pt-28 sm:px-12 sm:pb-16 lg:px-20">
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
                aria-label="Instagram"
                className="group inline-flex items-center gap-3 border border-[#C9C4B9] px-5 py-4 text-sm font-medium text-[#202322] transition-colors hover:border-[#E16A3A] hover:text-[#C65D32]"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>
                Instagram
              </a>
              <a
                href="https://t.me/+375259929001"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Telegram"
                className="group inline-flex items-center gap-3 border border-[#C9C4B9] px-5 py-4 text-sm font-medium text-[#202322] transition-colors hover:border-[#E16A3A] hover:text-[#C65D32]"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true"><path d="M21.4 4.6 18.2 20c-.2 1.1-.8 1.3-1.7.8l-4.8-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.4-4.9 8.9-8c.4-.4-.1-.6-.6-.2L6.1 13.8l-4.7-1.5c-1-.3-1-1 .2-1.5L20 3.4c.9-.3 1.7.2 1.4 1.2Z"/></svg>
                Telegram
              </a>
              <a
                href="viber://chat?number=%2B375259929001"
                aria-label="Viber"
                className="group inline-flex items-center gap-3 border border-[#C9C4B9] px-5 py-4 text-sm font-medium text-[#202322] transition-colors hover:border-[#E16A3A] hover:text-[#C65D32]"
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M5 3.5C2.8 4.5 2.7 7.1 3.4 9.4c1.6 5.1 6.1 9.6 11.2 11.2 2.3.7 4.9.6 5.9-1.6l.5-1.1-5-2.4-1.6 2-1.4-.6a13 13 0 0 1-5.5-5.5l-.6-1.4 2-1.6-2.4-5L5 3.5Z"/><path d="M13 5a6 6 0 0 1 6 6M13 8a3 3 0 0 1 3 3"/></svg>
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