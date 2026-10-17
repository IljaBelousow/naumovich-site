import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Каталог мебельных фасадов МДФ — ИП Наумович",
  description: "Каталог фрезерованных фасадов МДФ, интегрированных ручек и профилей края. Изготовление по индивидуальным размерам.",
};

const categories = [
  { id: "milled", title: "Фрезерованные фасады МДФ", eyebrow: "01 / ФАСАДЫ", description: "Рисунок, который задаёт характер мебели. Выберите модель, цвет и покрытие." },
  { id: "handles", title: "Интегрированные ручки", eyebrow: "02 / ДЕТАЛИ", description: "Минималистичные решения для современной кухни и корпусной мебели." },
  { id: "edge", title: "Профили края", eyebrow: "03 / ПРОФИЛИ", description: "Аккуратная обработка края — важная деталь завершённого фасада." },
];

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-[#fbfaf7] pt-20 text-[#24231f]">
      <section className="relative isolate flex min-h-[380px] items-end overflow-hidden bg-[#302e28] sm:min-h-[460px]">
        <Image src="/images/hero/hero-main.jpg" alt="Каталог крашеных фасадов МДФ" fill priority sizes="100vw" className="object-cover opacity-55" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 via-black/25 to-transparent" />
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-12 pt-20 sm:px-10 sm:pb-16 lg:px-16 xl:px-24">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.3em] text-[#e1cfb3] sm:text-xs">Коллекция ИП Наумович</p>
          <h1 className="max-w-3xl text-4xl font-light leading-[1.05] tracking-[-0.045em] text-white sm:text-6xl">Найдите фасад для своего проекта</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">Все модели сразу на странице — смотрите фотографии, сравнивайте профили и открывайте нужный фасад для подробностей.</p>
          <div className="mt-8 flex flex-wrap gap-3 text-[10px] uppercase tracking-[0.18em] text-white/85 sm:text-xs">
            <a href="#milled" className="border border-white/40 px-4 py-3 hover:bg-white hover:text-[#24231f]">Фрезерованные</a>
            <a href="#handles" className="border border-white/40 px-4 py-3 hover:bg-white hover:text-[#24231f]">Ручки</a>
            <a href="#edge" className="border border-white/40 px-4 py-3 hover:bg-white hover:text-[#24231f]">Профили края</a>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-16 xl:px-24">
        {categories.map((category, sectionIndex) => {
          const items = facades.filter((item) => item.category === category.id);
          return (
            <section id={category.id} key={category.id} className="scroll-mt-24 border-b border-[#e4e1d9] py-14 sm:py-20">
              <div className="mb-8 grid gap-4 sm:mb-10 sm:grid-cols-[1fr_0.8fr] sm:items-end">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a68a62] sm:text-xs">{category.eyebrow}</p>
                  <h2 className="text-3xl font-light tracking-[-0.035em] sm:text-5xl">{category.title}</h2>
                </div>
                <p className="max-w-xl text-sm leading-7 text-[#77766f] sm:justify-self-end sm:text-base">{category.description}</p>
              </div>

              {category.id === "edge" && items.length === 0 ? (
                <div className="grid gap-8 md:grid-cols-[0.9fr_1fr] md:items-center">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#efede7]">
                    <Image src="/images/profil_kraya.jpg" alt="Примеры профилей края фасада" fill sizes="(max-width: 768px) 100vw, 45vw" className="object-contain p-4" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-light">Форма края — часть дизайна</h3>
                    <p className="mt-4 max-w-lg text-sm leading-7 text-[#77766f]">Подберём профиль под фасад и общий стиль мебели. Обсудим подходящий вариант при оформлении заказа.</p>
                    <Link href="/contacts" className="mt-7 inline-flex min-h-12 items-center bg-[#24231f] px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9b7950]">Уточнить варианты <span className="ml-5 text-lg">↗</span></Link>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                  {items.map((item, index) => (
                    <Link key={item.slug} href={`/catalog/${item.slug}`} className="group min-w-0">
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#efede7]">
                        <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                        <span className="absolute left-3 top-3 bg-[#fbfaf7]/90 px-2 py-1 text-[9px] uppercase tracking-[0.13em] text-[#68645a]">{String(index + 1).padStart(2, "0")}</span>
                        <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbfaf7] text-lg opacity-0 transition-opacity group-hover:opacity-100">↗</span>
                      </div>
                      <div className="pt-4">
                        <h3 className="text-sm font-medium sm:text-base">{item.name}</h3>
                        <p className="mt-2 line-clamp-3 text-xs leading-5 text-[#77766f] sm:text-sm">{item.description || (category.id === "milled" ? "Фрезерованный фасад МДФ под заказ" : category.id === "handles" ? "Интегрированная ручка для мебельного фасада" : "Профиль обработки края")}</p>
                        <span className="mt-4 inline-flex items-center gap-2 border-b border-[#c9b89e] pb-1 text-[9px] font-semibold uppercase tracking-[0.14em] sm:text-[10px]">Подробнее <span className="text-sm transition-transform group-hover:translate-x-1">→</span></span>
                      </div>
                    </Link>
                  ))}
                </div>
              )}
            </section>
          );
        })}
      </div>

      <section className="bg-[#eeece5]">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-6 px-5 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-center lg:justify-between lg:px-16 xl:px-24">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b7950]">Не нашли нужную модель?</p>
            <h2 className="mt-3 text-2xl font-light tracking-tight sm:text-4xl">Подберём решение под вашу мебель</h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-[#77766f]">Расскажите о размерах, цвете и желаемом стиле — обсудим детали изготовления.</p>
          </div>
          <Link href="/contacts" className="inline-flex min-h-14 shrink-0 items-center justify-center bg-[#24231f] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9b7950]">Обсудить заказ <span className="ml-5 text-lg">↗</span></Link>
        </div>
      </section>
    </main>
  );
}