import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export default function Home() {
  const featuredFacades = facades.filter((facade) => facade.category === "milled").slice(0, 4);

  return (
    <main className="w-full overflow-hidden bg-[#fbfaf7] pt-20">
      <section className="relative isolate min-h-[680px] h-[calc(88svh-5rem)] max-h-[900px] w-full overflow-hidden bg-[#282722]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Крашеные фасады МДФ на заказ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/35 to-black/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-black/10" />
        <div className="relative z-10 mx-auto flex h-full w-full max-w-[1600px] items-center px-6 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-3xl pb-6 text-white">
            <p className="mb-6 flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/75 sm:text-xs">
              <span className="h-px w-9 bg-[#c9ad82]" />
              Производство в Минске · ИП Наумович
            </p>
            <h1 className="max-w-3xl text-4xl font-light leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
              Фасады, которые
              <span className="mt-1 block font-normal text-[#e1cfb3]">создают характер мебели</span>
            </h1>
            <p className="mt-7 max-w-xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              Крашеные фасады МДФ по индивидуальным размерам. Фрезеровки, оттенки и отделка под ваш проект.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/catalog" className="inline-flex min-h-14 items-center justify-center bg-[#d9c4a3] px-8 text-xs font-semibold uppercase tracking-[0.18em] text-[#24231f] hover:bg-white">
                Смотреть каталог <span className="ml-4 text-base">↗</span>
              </Link>
              <Link href="/contacts" className="inline-flex min-h-14 items-center justify-center border border-white/50 bg-white/5 px-8 text-xs font-semibold uppercase tracking-[0.18em] text-white backdrop-blur-sm hover:border-white hover:bg-white/10">
                Обсудить проект
              </Link>
            </div>
            <div className="mt-12 flex flex-wrap gap-x-8 gap-y-3 border-t border-white/25 pt-5 text-[10px] uppercase tracking-[0.17em] text-white/75 sm:text-xs">
              <span>Индивидуальные размеры</span>
              <span>Любые цвета</span>
              <span>Точная фрезеровка</span>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 right-8 z-10 hidden text-right text-[10px] uppercase tracking-[0.25em] text-white/60 lg:block">
          Мебельные фасады МДФ
          <span className="mt-2 block text-sm tracking-normal text-white/90">01 / Каталог</span>
        </div>
      </section>

      <section className="mx-auto w-full max-w-[1600px] px-5 py-20 sm:px-10 sm:py-28 lg:px-16 xl:px-24">
        <div className="mb-10 flex flex-col gap-5 border-b border-[#e8e6e0] pb-7 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b886e] sm:text-xs">Выберите свой стиль</p>
            <h2 className="text-3xl font-light tracking-[-0.035em] text-[#24231f] sm:text-5xl">Популярные модели</h2>
          </div>
          <Link href="/catalog" className="group inline-flex items-center gap-3 self-start pb-1 text-xs font-semibold uppercase tracking-[0.15em] text-[#4f4d46] hover:text-[#9b7950] sm:self-auto">
            Весь каталог <span className="text-lg transition-transform group-hover:translate-x-1">→</span>
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-9 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {featuredFacades.map((facade, index) => (
            <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="group block">
              <div className="relative mb-4 aspect-[4/5] overflow-hidden bg-[#f0eee8]">
                <Image
                  src={facade.image}
                  alt={facade.name}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 25vw, 320px"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-3 top-3 bg-[#fbfaf7]/90 px-2.5 py-1.5 text-[9px] uppercase tracking-[0.15em] text-[#555148] sm:left-4 sm:top-4">
                  Модель {String(index + 1).padStart(2, "0")}
                </span>
                <span className="absolute bottom-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-[#fbfaf7] text-lg text-[#24231f] opacity-0 transition-all duration-300 group-hover:opacity-100 sm:bottom-4 sm:right-4">↗</span>
              </div>
              <h3 className="text-sm font-medium tracking-wide text-[#24231f] sm:text-base">{facade.name}</h3>
              <p className="mt-2 line-clamp-2 text-xs leading-5 text-[#77766f] sm:text-sm">{facade.description || "Фрезерованный фасад МДФ под заказ"}</p>
            </Link>
          ))}
        </div>
        <div className="mt-10 text-center sm:mt-14">
          <Link href="/catalog" className="inline-flex min-h-12 items-center justify-center border border-[#b8b2a6] px-8 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#24231f] hover:border-[#24231f] hover:bg-[#24231f] hover:text-white">
            Перейти в каталог
          </Link>
        </div>
      </section>

      <section className="bg-[#eeece5]">
        <div className="mx-auto grid max-w-[1600px] gap-10 px-5 py-16 sm:px-10 sm:py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:gap-20 lg:px-16 xl:px-24">
          <div>
            <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.28em] text-[#9b7950] sm:text-xs">Обновление мебели</p>
            <h2 className="max-w-2xl text-3xl font-light leading-tight tracking-[-0.035em] text-[#24231f] sm:text-5xl">
              Новые фасады — новое настроение интерьера
            </h2>
          </div>
          <div>
            <p className="text-sm leading-7 text-[#66645c] sm:text-base sm:leading-8">
              Если корпус кухни или шкафа в хорошем состоянии, можно заменить только фасады. Изготовим дверцы по вашим размерам, поможем подобрать фрезеровку и цвет.
            </p>
            <Link href="/contacts" className="mt-7 inline-flex items-center gap-4 border-b border-[#9b7950] pb-2 text-xs font-semibold uppercase tracking-[0.16em] text-[#24231f] hover:gap-6">
              Обсудить изготовление <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1600px] px-5 py-16 sm:px-10 sm:py-20 lg:px-16 xl:px-24">
        <div className="grid gap-8 border-y border-[#e8e6e0] py-8 sm:grid-cols-3 sm:gap-10 sm:py-10">
          {[
            ["01", "Под ваши размеры", "Изготавливаем фасады по параметрам вашего проекта."],
            ["02", "Цвет и фактура", "Подбираем оттенок и финиш под интерьер."],
            ["03", "От идеи до детали", "Помогаем выбрать модель и согласовать заказ."],
          ].map(([number, title, description]) => (
            <div key={number} className="flex gap-4">
              <span className="pt-1 text-xs tracking-[0.12em] text-[#a68a62]">{number}</span>
              <div>
                <h3 className="text-base font-medium text-[#24231f]">{title}</h3>
                <p className="mt-2 max-w-xs text-sm leading-6 text-[#77766f]">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
