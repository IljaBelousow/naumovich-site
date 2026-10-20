import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Наши работы — ИП Наумович",
  description: "Портфолио выполненных работ: крашеные фасады МДФ и мебель на заказ.",
};

export default function PortfolioPage() {
  const categories = [
    {
      title: "Фасады",
      href: "/portfolio/facades",
      image: facades.find((item) => item.category === "work_facades")?.image ?? "/images/catalog1/image1.jpg",
      imageAlt: "Примеры фасадов из МДФ",
    },
    {
      title: "Мебель",
      href: "/portfolio/furniture",
      image: facades.find((item) => item.category === "work_furniture")?.image ?? "/images/catalog2/photo1/5195250767357484499.jpg",
      imageAlt: "Примеры мебели на заказ",
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#E9E8E3]">
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[360px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Примеры мебели и фасадов из МДФ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/78 via-[#141716]/35 to-[#141716]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/55 via-transparent to-[#141716]/10" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-8 pt-24 sm:px-12 sm:pb-10 lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E16A3A]">
            <span className="h-px w-9 bg-[#E16A3A]" /> Портфолио · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Портфолио
          </h1>
          <p className="about-intro mt-6 max-w-2xl text-base leading-8 text-white/75 sm:text-lg">
            Реализованные проекты фасадов и мебели с вниманием к материалам, форме и деталям.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-5 lg:gap-7">
          {categories.map((category) => (
            <Link
              key={category.title}
              href={category.href}
              className="group relative isolate block min-h-[190px] overflow-hidden bg-[#202322] sm:min-h-[230px] lg:min-h-[260px]"
            >
              <Image
                src={category.image}
                alt={category.imageAlt}
                fill
                sizes="(max-width: 640px) 100vw, 100vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/90 via-[#141716]/25 to-transparent transition-colors duration-300 group-hover:from-[#141716]/95" />
              <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6 lg:p-8">
                <h2 className="max-w-sm text-xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-2xl">
                  {category.title}
                </h2>
                <span className="mt-4 inline-flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.18em] text-white">
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
