import Link from "next/link";

export const metadata = {
  title: "Контакты — ИП Наумович",
  description: "Свяжитесь с производством крашеных фасадов МДФ ИП Наумович: телефон, мессенджеры, Instagram и адрес.",
};

export default function ContactsPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pt-20 text-[#24231f]">
      <section className="mx-auto max-w-[1600px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b7950] sm:text-xs">Будем на связи</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] sm:text-6xl">Давайте обсудим ваш проект</h1>
        <p className="mt-5 max-w-2xl text-sm leading-7 text-[#77766f] sm:text-base sm:leading-8">Позвоните или напишите — поможем с выбором модели, оттенка и покрытия, ответим на вопросы по изготовлению.</p>
        <div className="mt-10 grid gap-0 border border-[#e4e1d9] lg:grid-cols-[1.2fr_0.8fr]">
          <div className="bg-[#eeece5] p-6 sm:p-10 lg:p-14">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#9b7950]">Телефон</p>
            <a href="tel:+375259929001" className="mt-4 block break-words text-3xl font-light tracking-[-0.035em] hover:text-[#9b7950] sm:text-5xl">+375 25 992-90-01</a>
            <p className="mt-3 text-sm text-[#77766f]">Звонки, Telegram и Viber</p>
            <a href="tel:+375447744449" className="mt-7 block text-xl font-light hover:text-[#9b7950] sm:text-2xl">+375 44 774-44-49</a>
            <p className="mt-2 text-sm text-[#77766f]">Прямой контакт с директором</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://t.me/+375259929001" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center bg-[#24231f] px-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-white hover:bg-[#9b7950]">Telegram ↗</a>
              <a href="https://www.instagram.com/vintazh100" target="_blank" rel="noopener noreferrer" className="inline-flex min-h-12 items-center justify-center border border-[#24231f] px-5 text-[10px] font-semibold uppercase tracking-[0.15em] hover:bg-[#24231f] hover:text-white">Instagram ↗</a>
              <a href="viber://chat?number=%2B375259929001" className="inline-flex min-h-12 items-center justify-center border border-[#24231f] px-5 text-[10px] font-semibold uppercase tracking-[0.15em] hover:bg-[#24231f] hover:text-white">Viber ↗</a>
            </div>
          </div>
          <div className="p-6 sm:p-10 lg:p-14">
            <div className="border-b border-[#e4e1d9] pb-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7950]">Адрес производства</p>
              <p className="mt-3 text-lg leading-7">Меньковский тракт 21<br />Щомыслицкий сельсовет</p>
            </div>
            <div className="border-b border-[#e4e1d9] py-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7950]">Электронная почта</p>
              <a href="mailto:info@naumovich.by" className="mt-3 inline-block text-lg hover:text-[#9b7950]">info@naumovich.by</a>
            </div>
            <div className="pt-7">
              <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-[#9b7950]">Режим работы</p>
              <p className="mt-3 text-base leading-7 text-[#77766f]">Пн–Пт: 9:00–18:00<br />Сб: 10:00–15:00</p>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-[#e4e1d9] bg-white">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-4 px-5 py-8 sm:px-10 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-24">
          <p className="text-sm text-[#77766f]">Удобнее написать? Выберите привычный способ связи.</p>
          <Link href="/catalog" className="text-xs font-semibold uppercase tracking-[0.15em] hover:text-[#9b7950]">Вернуться в каталог <span className="ml-2">→</span></Link>
        </div>
      </section>
    </main>
  );
}