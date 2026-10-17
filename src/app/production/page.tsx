import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Производство — ИП Наумович",
  description: "Этапы производства крашеных фасадов МДФ: фрезеровка, подготовка, грунтование и покраска.",
};

const steps = [
  { num: "01", title: "Фрезеровка", text: "Кроим и фрезеруем МДФ точно по размерам проекта, формируя выбранный рисунок и профиль края." },
  { num: "02", title: "Подготовка", text: "Шлифуем поверхность и подготавливаем её к нанесению грунта, уделяя внимание ровности и деталям." },
  { num: "03", title: "Грунтование и покраска", text: "Наносим грунтовочные слои, затем окрашиваем в выбранный оттенок по системам RAL, WCP, NCS или Caparol." },
  { num: "04", title: "Проверка и упаковка", text: "Проверяем готовые детали, контролируем качество покрытия и подготавливаем заказ к передаче." },
];

export default function ProductionPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pt-20 text-[#24231f]">
      <section className="relative isolate min-h-[360px] overflow-hidden bg-[#302e28] sm:min-h-[440px]">
        <Image src="/images/hero/hero-main.jpg" alt="Производство крашеных фасадов МДФ" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/10" />
        <div className="relative mx-auto flex min-h-[360px] max-w-[1600px] items-end px-5 pb-12 pt-20 sm:min-h-[440px] sm:px-10 sm:pb-16 lg:px-16 xl:px-24">
          <div>
            <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e1cfb3] sm:text-xs">Как мы работаем</p>
            <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] text-white sm:text-6xl">Качество начинается с процесса</h1>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">Основные этапы изготовления фасада — от обработки МДФ до готового покрытия.</p>
          </div>
        </div>
      </section>
      <section className="mx-auto max-w-[1600px] px-5 py-14 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <div className="mb-10 max-w-2xl"><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b7950]">Этапы производства</p><h2 className="mt-4 text-3xl font-light tracking-tight sm:text-5xl">Всё продумано до детали</h2></div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => <article key={step.num} className="border-t border-[#d9d5cb] pt-5"><span className="text-xs tracking-[0.15em] text-[#9b7950]">{step.num}</span><h3 className="mt-5 text-xl font-medium">{step.title}</h3><p className="mt-4 text-sm leading-7 text-[#77766f]">{step.text}</p></article>)}
        </div>
      </section>
      <section className="bg-[#eeece5]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-24">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b7950]">Ваш проект</p><h2 className="mt-3 text-2xl font-light sm:text-4xl">Нужен фасад определённого цвета или формы?</h2><p className="mt-3 max-w-xl text-sm leading-7 text-[#77766f]">Обсудим требования и подберём вариант исполнения под вашу задачу.</p></div>
          <Link href="/contacts" className="inline-flex min-h-14 shrink-0 items-center justify-center bg-[#24231f] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9b7950]">Обсудить заказ ↗</Link>
        </div>
      </section>
    </main>
  );
}