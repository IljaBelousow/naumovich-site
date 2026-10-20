import Link from "next/link";
import Image from "next/image";

export const metadata = {
  title: "Каталог — ИП Наумович",
  description: "Фрезерованные фасады МДФ, интегрированные ручки и мебель под заказ.",
};

const categories = [
  {
    title: "Фрезерованные фасады МДФ",
    description: "Формы, фрезеровка и отделка под ваш проект",
    href: "/catalog/milled",
    image: "/images/catalog1/image1.jpg",
    imageAlt: "Фрезерованный фасад из МДФ",
  },
  {
    title: "Интегрированные ручки",
    description: "Минималистичные решения для современных фасадов",
    href: "/catalog/handles",
    image: "/images/handles/gola.jpg",
    imageAlt: "Интегрированная ручка Gola",
  },
  {
    title: "Мебель под заказ",
    description: "Индивидуальные решения и реализованные проекты",
    href: "/portfolio",
    image: "/images/catalog2/photo1/5195250767357484499.jpg",
    imageAlt: "Мебельный проект на заказ",
  },
];

export default function CatalogPage() {
  return (
    <main className="w-full min-h-screen bg-[#E9E8E3]">
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[360px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Каталог мебели и фасадов из МДФ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/78 via-[#141716]/35 to-[#141716]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/55 via-transparent to-[#141716]/10" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-8 pt-24 sm:px-12 sm:pb-10 lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E16A3A]">
            <span className="h-px w-9 bg-[#E16A3A]" /> Каталог · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            <span>Каталог</span>
          </h1>
          <p className="about-intro mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Крашеные и шпонированные фасады из МДФ, фрезеровка, интегрированные ручки и мебельные детали.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-5 lg:gap-7">
          {categories.map((category, index) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative isolate block min-h-[240px] overflow-hidden bg-[#202322] sm:min-h-[300px] lg:min-h-[340px]"
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/90 via-[#141716]/25 to-transparent transition-colors duration-300 group-hover:from-[#141716]/95" />
              <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
                <p className="mb-3 text-[10px] font-medium uppercase tracking-[0.28em] text-[#E16A3A]">
                  Категория 0{index + 1}
                </p>
                <h2 className="max-w-sm text-2xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-3xl">
                  {category.title}
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                  {category.description}
                </p>
                <span className="mt-6 inline-flex items-center gap-3 text-xs font-medium uppercase tracking-[0.2em] text-white">
                  Смотреть <span aria-hidden="true" className="transition-transform duration-300 group-hover:translate-x-2">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
