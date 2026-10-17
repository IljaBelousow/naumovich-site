import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Портфолио — мебельные фасады и мебель на заказ | ИП Наумович",
  description: "Примеры изготовленных фасадов МДФ и мебели на заказ.",
};

export default function PortfolioPage() {
  const sections = [
    { id: "work_facades", title: "Фасады", link: "facades", note: "Фрезеровка, цвет и отделка в деталях." },
    { id: "work_furniture", title: "Мебель", link: "furniture", note: "Готовые решения и фасады в интерьере." },
  ];

  return (
    <main className="min-h-screen bg-[#fbfaf7] pt-20 text-[#24231f]">
      <section className="relative isolate flex min-h-[340px] items-end overflow-hidden bg-[#302e28] sm:min-h-[420px]">
        <Image src="/images/hero/hero-main.jpg" alt="Примеры мебельных фасадов" fill priority sizes="100vw" className="object-cover opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/65 to-black/10" />
        <div className="relative mx-auto w-full max-w-[1600px] px-5 pb-12 pt-16 sm:px-10 sm:pb-16 lg:px-16 xl:px-24">
          <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#e1cfb3] sm:text-xs">Реализованные проекты</p>
          <h1 className="max-w-3xl text-4xl font-light leading-tight tracking-[-0.04em] text-white sm:text-6xl">Работы, которые говорят за нас</h1>
          <p className="mt-5 max-w-xl text-sm leading-7 text-white/75 sm:text-base">Посмотрите примеры фасадов и мебели, изготовленных в мастерской ИП Наумович.</p>
        </div>
      </section>

      <div className="mx-auto max-w-[1600px] px-5 sm:px-10 lg:px-16 xl:px-24">
        {sections.map((section, sectionIndex) => {
          const items = facades.filter((item) => item.category === section.id);
          return (
            <section key={section.id} className="border-b border-[#e4e1d9] py-14 sm:py-20">
              <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-[#a68a62]">0{sectionIndex + 1} / ПОРТФОЛИО</p>
                  <h2 className="text-3xl font-light tracking-tight sm:text-5xl">{section.title}</h2>
                  <p className="mt-3 text-sm leading-6 text-[#77766f]">{section.note}</p>
                </div>
                <Link href={`/portfolio/${section.link}`} className="inline-flex items-center gap-3 self-start text-[10px] font-semibold uppercase tracking-[0.16em] hover:text-[#9b7950] sm:self-auto">Все проекты <span className="text-lg">→</span></Link>
              </div>
              {items.length ? (
                <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 sm:gap-y-10 lg:grid-cols-4">
                  {items.map((item, index) => (
                    <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group">
                      <div className="relative aspect-[4/5] overflow-hidden bg-[#efede7]">
                        <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" />
                        <span className="absolute bottom-3 left-3 bg-[#fbfaf7]/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.13em]">Проект {String(index + 1).padStart(2, "0")}</span>
                      </div>
                      <h3 className="mt-4 text-sm font-medium sm:text-base">{item.name}</h3>
                      <p className="mt-2 text-xs leading-5 text-[#77766f] sm:text-sm">{item.description || "Индивидуальное изготовление в мастерской ИП Наумович"}</p>
                    </Link>
                  ))}
                </div>
              ) : <p className="border border-[#e4e1d9] p-6 text-sm text-[#77766f]">Работы в этом разделе скоро появятся.</p>}
            </section>
          );
        })}
      </div>
      <section className="bg-[#eeece5] px-5 py-12 sm:px-10 sm:py-16 lg:px-16 xl:px-24">
        <div className="mx-auto flex max-w-[1600px] flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div><h2 className="text-2xl font-light sm:text-3xl">Есть идея для своего проекта?</h2><p className="mt-2 text-sm text-[#77766f]">Обсудим материалы, цвет и детали исполнения.</p></div>
          <Link href="/contacts" className="inline-flex min-h-12 items-center justify-center bg-[#24231f] px-6 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9b7950]">Связаться с нами ↗</Link>
        </div>
      </section>
    </main>
  );
}