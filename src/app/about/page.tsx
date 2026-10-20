import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "О компании — ИП Наумович",
  description:
    "Изготовление крашеных и шпонированных фасадов из МДФ, мебели и мебельных деталей на заказ.",
};

const companyValues = [
  {
    number: "01",
    title: "Изготовление под заказ",
    text: "Создаём фасады, мебель и детали с учётом размеров, назначения и особенностей вашего проекта.",
    mark: "01",
    icon: "settings",
  },
  {
    number: "02",
    title: "Внимание к деталям",
    text: "Продумываем форму, фрезеровку, цвет и финишное покрытие, чтобы элементы сочетались с интерьером.",
    mark: "02",
    icon: "sparkles",
  },
  {
    number: "03",
    title: "Выбор материалов и отделки",
    text: "Помогаем сориентироваться в вариантах фасадов, покрытий и внешнего вида будущего изделия.",
    mark: "03",
    icon: "palette",
  },
  {
    number: "04",
    title: "Индивидуальный подход",
    text: "Отталкиваемся от вашей задачи, пожеланий и нужного результата, а не от шаблонного решения.",
    mark: "04",
    icon: "user",
  },
  {
    number: "05",
    title: "Разные направления",
    text: "Работаем как с отдельными фасадами и мебельными деталями, так и с мебельными решениями.",
    mark: "05",
    icon: "layers",
  },
  {
    number: "06",
    title: "Сопровождение проекта",
    text: "Обсуждаем детали заказа и помогаем определиться с подходящим решением до начала работ.",
    mark: "06",
    icon: "message",
  },
];

const directions = [
  {
    number: "01",
    title: "Фасады из МДФ",
    text: "Крашеные и шпонированные фасады, фрезеровка и разные варианты финишной отделки.",
  },
  {
    number: "02",
    title: "Мебель на заказ",
    text: "Изготовление мебельных решений с учётом размеров помещения, задач и стиля интерьера.",
  },
  {
    number: "03",
    title: "Мебельные детали",
    text: "Детали по индивидуальным размерам — от формы и профиля до цвета и покрытия.",
  },
];

const approach = [
  ["01", "Вникаем в задачу", "Учитываем размеры, назначение мебели, пожелания и особенности интерьера."],
  ["02", "Подбираем решение", "Помогаем определиться с формой, фрезеровкой, цветом и типом покрытия."],
  ["03", "Прорабатываем детали", "Согласуем важные характеристики будущего изделия и уделяем внимание отделке."],
];


function AboutIcon({ name, className = "h-6 w-6" }: { name: string; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  const paths: Record<string, React.ReactNode> = {
    settings: <><path d="M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7Z" /><path d="m19.4 15 .1.1a1.7 1.7 0 0 1-2.4 2.4l-.1-.1a1.7 1.7 0 0 0-2.9 1.2v.2a1.7 1.7 0 0 1-3.4 0v-.2a1.7 1.7 0 0 0-2.9-1.2l-.1.1a1.7 1.7 0 0 1-2.4-2.4l.1-.1a1.7 1.7 0 0 0-1.2-2.9H4a1.7 1.7 0 0 1 0-3.4h.2a1.7 1.7 0 0 0 1.2-2.9l-.1-.1a1.7 1.7 0 0 1 2.4-2.4l.1.1a1.7 1.7 0 0 0 2.9-1.2V4a1.7 1.7 0 0 1 3.4 0v.2a1.7 1.7 0 0 0 2.9 1.2l.1-.1a1.7 1.7 0 0 1 2.4 2.4l-.1.1a1.7 1.7 0 0 0 1.2 2.9h.2a1.7 1.7 0 0 1 0 3.4h-.2a1.7 1.7 0 0 0-1.2.9Z" /></>,
    sparkles: <><path d="m12 3 1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Z" /><path d="m19 16 .8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16Z" /></>,
    palette: <><path d="M12 3a9 9 0 1 0 0 18h1.2a2 2 0 0 0 1.5-3.3 1.8 1.8 0 0 1 1.4-3h1.4A4.5 4.5 0 0 0 22 10.2C22 6.2 17.5 3 12 3Z" /><path d="M7.5 10h.01M10 6.8h.01M15 7.5h.01M17.5 10h.01" /></>,
    user: <><circle cx="12" cy="8" r="3.5" /><path d="M5 21a7 7 0 0 1 14 0" /></>,
    layers: <><path d="m12 3 9 5-9 5-9-5 9-5Z" /><path d="m3 12 9 5 9-5M3 16l9 5 9-5" /></>,
    message: <><path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l1.5-3A7.5 7.5 0 1 1 20 11.5Z" /><path d="M8 11h8M8 14h5" /></>,
    factory: <><path d="M3 21V9l6 3V8l6 4V5h4v16H3Z" /><path d="M7 17h2M13 17h2M17 9h2" /></>,
    sofa: <><path d="M5 12V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v3" /><path d="M4 12a2 2 0 0 0-2 2v4h20v-4a2 2 0 0 0-2-2H4ZM5 18v3M19 18v3" /></>,
    ruler: <><path d="m4 16 12-12 4 4L8 20l-4-4Z" /><path d="m13 7 2 2M10 10l2 2M7 13l2 2" /></>,
  };
  return <svg aria-hidden="true" viewBox="0 0 24 24" className={className} {...common}>{paths[name] ?? paths.sparkles}</svg>;
}

export default function AboutPage() {
  const featuredWorks = facades.filter((item) => item.category === "work_facades").slice(0, 3);

  return (
    <main className="w-full overflow-hidden bg-[#E9E8E3] text-[#202322]">
      <section className="relative isolate flex min-h-[560px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[650px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Мебельные фасады и детали из МДФ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-45"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/90 via-[#141716]/55 to-[#141716]/25" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/70 via-transparent to-[#141716]/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-16 pt-32 sm:px-12 sm:pb-20 lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E16A3A]">
            <span className="h-px w-9 bg-[#E16A3A]" /> О компании · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Детали, которые<br className="hidden sm:block" /> задают характер мебели.
          </h1>
          <div className="mt-6">
            <p className="about-intro max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Изготавливаем крашеные и шпонированные фасады из МДФ, мебель и детали под заказ.
              Продумываем каждую деталь под ваш интерьер.
            </p>
            <Link href="/contacts" className="site-button-on-dark group mt-6 inline-flex shrink-0">
              Обсудить проект <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#D7D7D2] py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <div className="mb-10 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32]">Наш подход</p>
            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              ИП Наумович — это
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-[#555954] sm:text-lg">
              Внимание к задаче, продуманные детали и решения, которые подстраиваются под ваш проект.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {companyValues.map((item) => (
              <article key={item.number} className="group min-h-[220px] rounded-sm bg-[#E9E8E3]/65 p-6 transition-all duration-300 hover:-translate-y-1 hover:bg-[#E9E8E3] sm:p-8 lg:min-h-[245px]">
                <div className="flex items-start justify-between gap-4">
                  <span className="flex h-11 w-11 items-center justify-center border border-[#C65D32]/50 text-xs font-semibold tracking-widest text-[#C65D32] transition-colors duration-300 group-hover:bg-[#C65D32] group-hover:text-white">
                    {item.mark}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-[#8A8B85]">{item.number}</span>
                </div>
                <h3 className="mt-7 text-xl font-medium sm:text-2xl">{item.title}</h3>
                <p className="mt-3 max-w-md text-sm leading-7 text-[#656963] sm:text-base">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8 flex items-start gap-4 rounded-sm bg-[#E9E8E3]/70 px-6 py-5 text-base leading-7 text-[#424640] sm:px-8 sm:py-6 sm:text-lg">
            <AboutIcon name="sparkles" className="mt-1 h-6 w-6 shrink-0 text-[#C65D32]" />
            <span>Наша задача — помочь воплотить вашу идею в изделии, где продуманы внешний вид, материалы и детали.</span>
          </div>
        </div>
      </section>

      <section className="bg-[#E9E8E3] py-14 sm:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <div className="mb-8 max-w-3xl">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32]">Наши направления</p>
            <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Что изготавливаем</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {directions.map((item) => (
              <article key={item.number} className="rounded-sm bg-white/45 p-6 transition-colors duration-300 hover:bg-white/75">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C65D32]/10 text-[#C65D32]"><AboutIcon name={item.number === "01" ? "layers" : item.number === "02" ? "sofa" : "ruler"} /></span>
                <h3 className="mt-5 text-xl font-medium sm:text-2xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-[#656963]">{item.text}</p>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/catalog" className="site-button group inline-flex">
              Перейти в каталог <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#202322] py-14 text-[#E9E8E3] sm:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#E16A3A]">Наш принцип</p>
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Подход к каждому заказу
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/65 sm:text-lg">
              Каждый проект начинается с обсуждения задачи. Учитываем ваши пожелания и помогаем выбрать детали, которые повлияют на итоговый вид изделия.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-5">
            {approach.map(([number, title, text]) => (
              <article key={number} className="grid gap-3 rounded-sm bg-white/[0.045] p-5 transition-colors duration-300 hover:bg-white/[0.08] sm:grid-cols-[52px_1fr] sm:gap-6 sm:p-7">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[#E16A3A]/15 text-[#E16A3A]"><AboutIcon name={number === "01" ? "message" : number === "02" ? "palette" : "sparkles"} /></span>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-white/65">{text}</p>
                </div>
              </article>
            ))}
          </div>
          </div>
          <div className="mt-8">
            <Link href="/contacts" className="group inline-flex items-center gap-4 border-b border-[#E16A3A] pb-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#E16A3A]">
              Обсудить свой проект <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#E9E8E3] py-14 text-[#202322] sm:py-20">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <div className="mb-7 max-w-3xl">
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C65D32]">Наши работы</p>
            <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Готовые проекты</h2>
            <p className="mt-3 max-w-2xl text-base leading-7 text-[#555954] sm:text-lg">
              Примеры решений для фасадов и мебели — от отдельных деталей до готовых интерьерных проектов.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {featuredWorks.map((work, index) => (
              <Link key={work.slug} href={`/portfolio/${work.slug}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-white/5">
                  <Image
                    src={work.image}
                    alt={work.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-100" />
                  <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-[0.2em] text-white">
                    Проект {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="absolute bottom-3 right-4 translate-y-2 text-xl text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100" aria-hidden="true">↗</span>
                </div>
                <h3 className="mt-4 text-base font-bold text-[#202322] transition-colors group-hover:text-[#C65D32]">{work.name}</h3>
                <p className="mt-1 text-sm text-[#656963]">Фасады и мебельные решения</p>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/portfolio" className="site-button group inline-flex">
              Смотреть портфолио <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
