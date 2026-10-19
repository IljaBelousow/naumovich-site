import Link from "next/link";

export const metadata = {
  title: "О компании — ИП Наумович",
  description:
    "ИП Наумович — изготовление мебельных деталей из МДФ: крашеных и шпонированных, мебель на заказ по индивидуальным параметрам.",
};

const principles = [
  {
    number: "01",
    title: "Собственная мастерская",
    text: "Не перепродаём — изготавливаем сами. Контролируем путь детали от подготовки материала до финишного покрытия.",
  },
  {
    number: "02",
    title: "Индивидуальный подход",
    text: "Размеры, форма, фрезеровка и отделка подбираются под ваш проект — без шаблонных решений.",
  },
  {
    number: "03",
    title: "Внимание к деталям",
    text: "Помогаем подобрать цвет и покрытие, чтобы новые фасады гармонично вписались в интерьер.",
  },
];

const stages = [
  {
    number: "01",
    title: "Обсуждаем задачу",
    text: "Уточняем размеры, назначение деталей, желаемый внешний вид и особенности проекта.",
  },
  {
    number: "02",
    title: "Подбираем решение",
    text: "Согласовываем форму, фрезеровку, оттенок и тип финишного покрытия.",
  },
  {
    number: "03",
    title: "Изготавливаем",
    text: "Переходим к производству после согласования параметров заказа.",
  },
];

export default function AboutPage() {
  return (
    <main className="about-page w-full overflow-hidden bg-[#F1EEE7]">
      <section className="about-hero relative isolate overflow-hidden bg-[#252723] text-[#F1EEE7]">
        <div className="about-hero-grid pointer-events-none absolute inset-0" aria-hidden="true" />
        <div className="about-orb about-orb-one pointer-events-none absolute" aria-hidden="true" />
        <div className="about-orb about-orb-two pointer-events-none absolute" aria-hidden="true" />
        <div className="relative mx-auto grid min-h-[590px] w-full max-w-[1600px] items-end gap-12 px-6 pb-16 pt-24 sm:px-12 sm:pb-20 lg:min-h-[680px] lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:px-20 xl:px-24">
          <div className="about-enter relative z-10 max-w-4xl">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.38em] text-[#C7B79D]">
              <span className="h-px w-10 bg-[#C7B79D]" />
              О компании · ИП Наумович
            </p>
            <h1 className="max-w-4xl text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Не просто детали.
              <span className="about-title-accent mt-2 block font-medium">Характер вашей мебели.</span>
            </h1>
            <p className="mt-8 max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Изготавливаем крашеные и шпонированные детали из МДФ и мебель под заказ — с вниманием к форме, фактуре и каждой линии.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <Link href="/contacts" className="about-hero-cta group inline-flex min-h-14 items-center justify-center gap-5 border border-[#C7B79D] px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#F1EEE7] transition-colors duration-300 hover:bg-[#C7B79D] hover:text-[#252723]">
                Обсудить проект
                <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
              </Link>
              <a href="#approach" className="inline-flex min-h-14 items-center gap-3 px-2 text-xs uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-white">
                Наш подход <span aria-hidden="true">↓</span>
              </a>
            </div>
          </div>
          <div className="about-enter about-enter-delayed relative mx-auto flex w-full max-w-md items-center justify-center lg:justify-end">
            <div className="about-ring relative flex aspect-square w-full max-w-[390px] items-center justify-center rounded-full border border-white/15">
              <div className="absolute inset-[9%] rounded-full border border-[#C7B79D]/35" />
              <div className="absolute inset-[19%] rounded-full border border-white/10" />
              <div className="about-ring-core relative flex aspect-square w-[58%] items-center justify-center rounded-full border border-[#C7B79D]/60 bg-[#C7B79D]/[0.07]">
                <div className="text-center">
                  <span className="block text-6xl font-light tracking-[-0.08em] text-[#C7B79D] sm:text-7xl">МДФ</span>
                  <span className="mt-3 block text-[9px] uppercase tracking-[0.34em] text-white/55">Made to measure</span>
                </div>
              </div>
              <span className="about-orbit-dot absolute left-[15%] top-[20%] h-2.5 w-2.5 rounded-full bg-[#C7B79D]" />
              <span className="absolute bottom-[17%] right-[11%] h-1.5 w-1.5 rounded-full bg-white/70" />
              <span className="absolute right-[3%] top-[37%] text-[9px] uppercase tracking-[0.25em] text-white/45 [writing-mode:vertical-rl]">Форма · Цвет · Фактура</span>
            </div>
            <p className="absolute -bottom-2 left-2 max-w-[170px] text-[10px] uppercase leading-5 tracking-[0.22em] text-white/45 sm:left-0 lg:-left-8">
              Продумано до последней детали
            </p>
          </div>
        </div>
        <div className="about-scroll-cue absolute bottom-0 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 pb-5 text-[9px] uppercase tracking-[0.3em] text-white/35 sm:flex">
          Листайте вниз <span className="h-8 w-px bg-gradient-to-b from-[#C7B79D] to-transparent" />
        </div>
      </section>

      <section id="approach" className="relative mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-12 sm:py-28 lg:px-20 xl:px-24">
        <div className="about-section-heading grid gap-6 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#82745F]">Наш подход</p>
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Хорошая мебель начинается с правильных деталей
            </h2>
          </div>
          <div className="lg:pt-9">
            <p className="max-w-3xl text-lg leading-relaxed text-gray-700 sm:text-xl">
              ИП Наумович — собственная мастерская по изготовлению мебельных деталей из МДФ. Работаем с частными клиентами и мебельщиками, создавая решения под конкретные размеры и задачи.
            </p>
            <p className="mt-5 max-w-3xl text-base leading-relaxed text-gray-600 sm:text-lg">
              Хотите обновить кухню или шкаф? Если корпус ещё в хорошем состоянии, можно заменить только фасады — и по-новому раскрыть знакомый интерьер без покупки всей мебели.
            </p>
          </div>
        </div>

        <div className="mt-14 grid gap-px border border-[#D8D0C3] bg-[#D8D0C3] sm:grid-cols-3">
          {principles.map((principle, index) => (
            <article key={principle.number} className="about-principle group relative min-h-[250px] overflow-hidden bg-[#F1EEE7] p-7 sm:p-8 lg:p-10" style={{ animationDelay: `${index * 130}ms` }}>
              <span className="about-principle-number block text-xs tracking-[0.2em] text-[#82745F]">{principle.number}</span>
              <div className="my-8 h-px w-12 bg-[#B5A58C] transition-all duration-500 group-hover:w-24" />
              <h2 className="text-xl font-medium tracking-tight text-gray-900">{principle.title}</h2>
              <p className="mt-4 text-sm leading-7 text-gray-600">{principle.text}</p>
              <span aria-hidden="true" className="about-card-corner absolute -bottom-8 -right-8 h-24 w-24 rounded-full border border-[#82745F]/20 transition-transform duration-700 group-hover:scale-[1.8]" />
            </article>
          ))}
        </div>
      </section>

      <section className="bg-[#E5E0D6]">
        <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-20 xl:px-24">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#82745F]">От идеи к результату</p>
            <h2 className="max-w-lg text-3xl font-light leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Понятный процесс. Продуманный результат.
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-gray-600">
              На каждом этапе согласовываем важные детали, чтобы результат соответствовал вашему замыслу.
            </p>
          </div>
          <div className="about-timeline">
            {stages.map((stage, index) => (
              <article key={stage.number} className="about-stage group grid grid-cols-[48px_1fr] gap-5 py-6 sm:grid-cols-[64px_1fr] sm:gap-7" style={{ animationDelay: `${index * 160}ms` }}>
                <div className="relative flex justify-center">
                  <span className="about-stage-number relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-[#B5A58C] bg-[#E5E0D6] text-[10px] tracking-wider text-[#625746] transition-colors duration-300 group-hover:bg-[#252723] group-hover:text-[#F1EEE7]">{stage.number}</span>
                  {index < stages.length - 1 && <span className="absolute top-10 h-full w-px bg-[#C9C0B2]" />}
                </div>
                <div className="pb-2">
                  <h3 className="text-xl font-medium text-gray-900">{stage.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">{stage.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-6 py-20 sm:px-12 sm:py-28 lg:px-20 xl:px-24">
        <div className="about-finish relative overflow-hidden bg-[#252723] px-7 py-12 text-[#F1EEE7] sm:px-12 sm:py-16 lg:px-16">
          <div className="about-finish-line pointer-events-none absolute right-0 top-0 h-full w-1/3" aria-hidden="true" />
          <div className="relative z-10 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="mb-4 text-[10px] font-medium uppercase tracking-[0.35em] text-[#C7B79D]">Есть идея?</p>
              <h2 className="max-w-2xl text-3xl font-light leading-tight sm:text-4xl">Давайте подберём решение для вашего проекта</h2>
              <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
                Расскажите, что хотите изготовить — обсудим размеры, отделку и следующие шаги.
              </p>
            </div>
            <Link href="/contacts" className="group inline-flex min-h-14 shrink-0 items-center justify-center gap-5 border border-[#C7B79D] px-7 py-4 text-xs font-medium uppercase tracking-[0.18em] text-[#F1EEE7] transition-colors duration-300 hover:bg-[#C7B79D] hover:text-[#252723]">
              Связаться
              <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
