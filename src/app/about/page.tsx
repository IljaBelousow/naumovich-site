import Link from "next/link";

export const metadata = {
  title: "О компании — ИП Наумович",
  description:
    "Изготовление крашеных и шпонированных фасадов из МДФ и мебели на заказ. Индивидуальный подход к каждому проекту.",
};

const figures = [
  {
    value: "03",
    label: "направления работы",
    detail: "Крашеные фасады, шпонированные фасады и мебель на заказ",
  },
  {
    value: "02",
    label: "варианта отделки",
    detail: "Эмаль и шпон — под стиль и задачу вашего интерьера",
  },
  {
    value: "01",
    label: "проект под вас",
    detail: "Размеры, форма и детали согласовываются индивидуально",
  },
];

const steps = [
  ["01", "Обсуждаем задачу", "Уточняем размеры, назначение деталей и желаемый результат."],
  ["02", "Согласовываем детали", "Подбираем форму, фрезеровку, оттенок и тип покрытия."],
  ["03", "Изготавливаем заказ", "Переходим к работе после согласования параметров проекта."],
];

export default function AboutPage() {
  return (
    <main className="w-full overflow-hidden bg-[#F1EEE7] text-[#252723]">
      <section className="relative isolate overflow-hidden bg-[#252723] text-[#F1EEE7]">
        <div className="pointer-events-none absolute inset-0 opacity-[0.08]" aria-hidden="true"
          style={{ backgroundImage: "linear-gradient(90deg, transparent 49.9%, #C7B79D 50%, transparent 50.1%)", backgroundSize: "120px 100%" }} />
        <div className="relative mx-auto flex min-h-[470px] w-full max-w-[1500px] flex-col justify-end px-6 pb-16 pt-28 sm:px-12 sm:pb-20 lg:min-h-[560px] lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#C7B79D]">
            <span className="h-px w-9 bg-[#C7B79D]" /> О компании · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Детали, которые<br className="hidden sm:block" /> задают характер мебели.
          </h1>
          <div className="mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="about-intro max-w-2xl text-base leading-8 text-white/65 sm:text-lg">
              Изготавливаем крашеные и шпонированные фасады из МДФ и мебель на заказ.
              Продумываем каждую деталь под ваш интерьер.
            </p>
            <Link href="/contacts" className="site-button-on-dark group shrink-0">
              Обсудить проект <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="about-intro mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#82745F]">В цифрах и фактах</p>
            <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-tight sm:text-5xl">
              Небольшие детали.<br />Большая разница.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-7 text-gray-600 sm:text-base">
            Работаем с материалом, формой и отделкой, чтобы результат соответствовал вашему замыслу.
          </p>
        </div>

        <div className="about-figures grid border-y border-[#CFC6B8] sm:grid-cols-3">
          {figures.map((figure, index) => (
            <article key={figure.value} className="about-figure group relative border-b border-[#CFC6B8] px-5 py-8 sm:border-b-0 sm:px-7 sm:py-10 lg:px-10 lg:py-12"
              style={{ animationDelay: `${index * 140}ms` }}>
              <div className="flex items-start justify-between gap-4">
                <span className="about-figure-value text-6xl font-light leading-none tracking-[-0.08em] text-[#82745F] sm:text-7xl lg:text-8xl">{figure.value}</span>
                <span className="mt-2 flex h-9 w-9 items-center justify-center rounded-full border border-[#CFC6B8] text-sm text-[#82745F] transition-all duration-500 group-hover:-translate-y-1 group-hover:border-[#82745F] group-hover:bg-[#252723] group-hover:text-[#F1EEE7]">↗</span>
              </div>
              <h3 className="mt-8 text-lg font-medium sm:text-xl">{figure.label}</h3>
              <p className="mt-3 max-w-xs text-sm leading-6 text-gray-600">{figure.detail}</p>
              <span className="about-figure-line absolute bottom-0 left-0 h-[2px] w-0 bg-[#82745F] transition-all duration-700 group-hover:w-full" />
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs leading-5 text-gray-500">Количество направлений и вариантов отделки — по ассортименту мастерской, а не рекламные показатели.</p>
      </section>

      <section className="bg-[#E5E0D6]">
        <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-6 py-20 sm:px-12 sm:py-24 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20 lg:px-20">
          <div className="about-intro">
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#82745F]">Как мы работаем</p>
            <h2 className="max-w-lg text-3xl font-light leading-tight tracking-tight sm:text-5xl">От идеи — к готовой детали.</h2>
            <p className="mt-6 max-w-md text-base leading-7 text-gray-600">
              Сначала понимаем задачу, затем согласовываем параметры и только после этого приступаем к изготовлению.
            </p>
          </div>
          <div>
            {steps.map(([number, title, description], index) => (
              <article key={number} className="about-step group grid grid-cols-[52px_1fr] gap-5 border-t border-[#C9C0B2] py-7 sm:grid-cols-[68px_1fr] sm:gap-7"
                style={{ animationDelay: `${index * 150}ms` }}>
                <span className="about-step-number flex h-11 w-11 items-center justify-center border border-[#B5A58C] text-xs tracking-wider text-[#625746] transition-all duration-300 group-hover:bg-[#252723] group-hover:text-[#F1EEE7] sm:h-12 sm:w-12">{number}</span>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">{description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1500px] px-6 py-20 sm:px-12 sm:py-28 lg:px-20">
        <div className="about-bottom flex flex-col gap-7 bg-[#252723] px-7 py-10 text-[#F1EEE7] sm:px-12 sm:py-14 lg:flex-row lg:items-center lg:justify-between lg:px-16">
          <div>
            <p className="mb-4 text-[11px] font-semibold uppercase tracking-[0.32em] text-[#C7B79D]">Ваш проект</p>
            <h2 className="max-w-2xl text-3xl font-light leading-tight sm:text-4xl">Расскажите, что хотите создать.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/60 sm:text-base">Обсудим материалы, размеры и подходящий вариант отделки.</p>
          </div>
          <Link href="/contacts" className="site-button-on-dark group shrink-0">
            Связаться <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
