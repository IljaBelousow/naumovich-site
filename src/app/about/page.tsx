import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "О компании — ИП Наумович",
  description: "Изготовление мебельных деталей из МДФ, крашеных и шпонированных фасадов и мебели на заказ.",
};

const principles = [
  { num: "01", title: "Собственная мастерская", text: "Изготавливаем сами и контролируем детали на каждом этапе." },
  { num: "02", title: "Под ваш проект", text: "Размеры, форма, цвет и покрытие подбираются под конкретную мебель." },
  { num: "03", title: "Внимание к отделке", text: "Тщательная подготовка поверхности помогает добиться аккуратного финиша." },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pt-20 text-[#24231f]">
      <section className="relative isolate min-h-[360px] overflow-hidden bg-[#302e28] sm:min-h-[440px]">
        <Image src="/images/hero/hero-main.jpg" alt="Крашеные мебельные фасады МДФ" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="relative mx-auto flex min-h-[360px] max-w-[1600px] items-end px-5 pb-12 pt-20 sm:min-h-[440px] sm:px-10 sm:pb-16 lg:px-16 xl:px-24">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e1cfb3] sm:text-xs">О компании</p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] text-white sm:text-6xl">Детали, из которых складывается мебель</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">ИП Наумович — изготовление фасадов МДФ, мебельных деталей и мебели по индивидуальным параметрам.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto grid max-w-[1600px] gap-10 px-5 py-14 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:gap-20 lg:px-16 xl:px-24">
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b7950]">Наш подход</p>
          <h2 className="mt-4 text-3xl font-light leading-tight tracking-[-0.035em] sm:text-5xl">От идеи до готового фасада</h2>
        </div>
        <div className="space-y-5 text-sm leading-7 text-[#77766f] sm:text-base sm:leading-8">
          <p>Изготавливаем мебельные детали из МДФ — крашеные и шпонированные, а также мебель по индивидуальным параметрам. Работаем с частными клиентами и мебельщиками.</p>
          <p>Если корпус кухни или шкафа ещё в хорошем состоянии, можно заменить только фасады. Поможем подобрать фрезеровку и цвет, чтобы обновить интерьер без полной замены мебели.</p>
          <p>Для подбора оттенка используем системы RAL, WCP, NCS и Caparol. Возможны матовые и глянцевые покрытия и декоративные эффекты.</p>
        </div>
      </section>
      <section className="bg-[#eeece5]">
        <div className="mx-auto grid max-w-[1600px] gap-8 px-5 py-12 sm:grid-cols-3 sm:gap-10 sm:px-10 sm:py-16 lg:px-16 xl:px-24">
          {principles.map((p) => <div key={p.num} className="border-t border-[#cfc8bb] pt-5"><p className="text-xs tracking-[0.15em] text-[#9b7950]">{p.num}</p><h2 className="mt-4 text-xl font-medium">{p.title}</h2><p className="mt-3 text-sm leading-6 text-[#77766f]">{p.text}</p></div>)}
        </div>
      </section>
      <section className="mx-auto flex max-w-[1600px] flex-col gap-5 px-5 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-24">
        <div><h2 className="text-2xl font-light sm:text-3xl">Расскажите, что хотите изготовить</h2><p className="mt-2 text-sm text-[#77766f]">Обсудим размеры, материал и отделку.</p></div>
        <Link href="/contacts" className="inline-flex min-h-12 items-center justify-center bg-[#24231f] px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9b7950]">Связаться с нами ↗</Link>
      </section>
    </main>
  );
}