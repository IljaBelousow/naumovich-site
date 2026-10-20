import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "О компании — ИП Наумович",
  description:
    "Изготовление крашеных и шпонированных фасадов из МДФ и мебели на заказ. Индивидуальный подход к каждому проекту.",
};

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
  ["03", "Контролируем результат", "Следим за качеством деталей на этапах подготовки, отделки и изготовления."],
];

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
          <div className="mt-6 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <p className="about-intro max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
              Изготавливаем крашеные и шпонированные фасады из МДФ, мебель и детали под заказ.
              Продумываем каждую деталь под ваш интерьер.
            </p>
            <Link href="/contacts" className="site-button-on-dark group shrink-0">
              Обсудить проект <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-[#D7D7D2] py-12 sm:py-16">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <div className="mb-8 flex flex-col gap-4 border-b border-[#B8B9B4] pb-8 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32]">Наши направления</p>
              <h2 className="max-w-2xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">Что изготавливаем</h2>
            </div>
            <Link href="/catalog" className="site-button group shrink-0">
              Перейти в каталог <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
          </div>
          <div className="grid gap-6 md:grid-cols-3 md:gap-8">
            {directions.map((item) => (
              <article key={item.number} className="border-t border-[#B8B9B4] pt-5">
                <span className="text-xs font-medium tracking-[0.2em] text-[#C65D32]">{item.number}</span>
                <h3 className="mt-5 text-xl font-medium sm:text-2xl">{item.title}</h3>
                <p className="mt-4 max-w-md text-base leading-7 text-gray-600">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E9E8E3] py-12 sm:py-16">
        <div className="mx-auto grid w-full max-w-[1500px] gap-8 px-6 sm:px-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-12 lg:px-20">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32]">Наш принцип</p>
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Подход к каждому заказу
            </h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-gray-600 sm:text-lg">
              Для нас важно, чтобы готовые детали подходили не только по размеру, но и по характеру интерьера.
              Поэтому каждый проект начинаем с ваших задач и внимательно прорабатываем детали.
            </p>
            <Link href="/contacts" className="group mt-8 inline-flex items-center gap-4 border-b border-[#C65D32] pb-2 text-xs font-medium uppercase tracking-[0.2em] transition-colors hover:text-[#C65D32]">
              Обсудить свой проект <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
          <div className="border-t border-[#B8B9B4]">
            {approach.map(([number, title, text]) => (
              <article key={number} className="grid gap-3 border-b border-[#B8B9B4] py-6 sm:grid-cols-[64px_1fr] sm:gap-6 sm:py-8">
                <span className="text-xs font-medium tracking-[0.2em] text-[#C65D32]">{number}</span>
                <div>
                  <h3 className="text-xl font-medium">{title}</h3>
                  <p className="mt-3 max-w-2xl text-base leading-7 text-gray-600">{text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#E9E8E3] py-12 text-[#202322] sm:py-16">
        <div className="mx-auto w-full max-w-[1500px] px-6 sm:px-12 lg:px-20">
          <div className="mb-7 flex flex-col gap-4 border-b border-[#B8B9B4] pb-7 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.3em] text-[#C65D32]">Наши работы</p>
              <h2 className="text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">Готовые проекты</h2>
              <p className="mt-3 max-w-2xl text-base leading-7 text-[#555954] sm:text-lg">
                Примеры реализованных решений для фасадов и мебели — от отдельных деталей до законченных проектов.
              </p>
            </div>
            <Link href="/portfolio" className="site-button group shrink-0">
              Смотреть портфолио <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-1">↗</span>
            </Link>
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
          <div className="mt-7 flex flex-col gap-4 border-t border-[#B8B9B4] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-sm leading-7 text-[#656963]">
              Есть идея или задача? Обсудим материалы, размеры и подходящую отделку.
            </p>
            <div className="flex flex-wrap items-center gap-6">
              <Link href="/portfolio" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#C65D32] transition-colors hover:text-[#202322]">
                Все проекты <span aria-hidden="true">↗</span>
              </Link>
              <Link href="/contacts" className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.2em] text-[#202322] transition-colors hover:text-[#C65D32]">
                Связаться с нами <span aria-hidden="true">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
