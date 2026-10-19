import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export default function Home() {
  // Берем первые 4 фасада из каталога
  const featuredFacades = facades.filter(f => f.category === "milled").slice(0, 4);

  return (
    <main className="w-full bg-[#E9E8E3] antialiased">
      
      {/* === ГЛАВНАЯ КАРТИНКА (HERO) === */}
      <section className="industrial-hero relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-[#202322]">
        <Image
          src="/images/hero/hero-main.jpg" 
          alt="Крашеные фасады МДФ на заказ"
          fill
          priority
          className="object-cover object-center opacity-40 transition-transform duration-1000 hover:scale-105"
        />
        
        {/* Затемняющий оверлей для идеальной читаемости белого текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10"></div>

        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="w-full max-w-5xl text-left">
            <p className="industrial-kicker mb-5 text-xs font-normal uppercase tracking-[0.4em] text-white/75 sm:mb-6">
              ИП НАУМОВИЧ
            </p>
            <h1 className="industrial-headline max-w-4xl text-left text-3xl font-bold uppercase leading-tight tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-6xl">
              ИЗГОТОВЛЕНИЕ МЕБЕЛИ И
              <br className="hidden sm:block" />
              <span className="mt-2 block font-semibold sm:mt-0">КРАШЕНЫХ ФАСАДОВ ИЗ МДФ</span>
            </h1>
          </div>
        </div>
      </section>
      {/* === КОНЕЦ ГЛАВНОЙ КАРТИНКИ === */}


      {/* === О КОМПАНИИ: первый информационный блок главной === */}
      <section id="about" className="w-full bg-[#D7D7D2] py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 lg:px-20 xl:px-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32]">О компании</p>
            <h2 className="max-w-xl text-3xl font-light leading-tight tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
              Изготавливаем детали, которые задают характер мебели
            </h2>
          </div>
          <div className="max-w-3xl">
            <p className="text-lg font-normal leading-relaxed text-gray-700 sm:text-xl">
              ИП Наумович — собственная мастерская по изготовлению мебельных деталей из МДФ: крашеных и шпонированных. Производим детали и мебель под индивидуальные размеры, работаем с частными клиентами и мебельщиками.
            </p>
            <p className="mt-5 text-base font-normal leading-relaxed text-gray-600 sm:text-lg">
              Подбираем решения под ваш проект: от формы и фрезеровки до цвета и финишного покрытия. А если корпус мебели ещё в хорошем состоянии, можно заменить только фасады — без покупки новой мебели.
            </p>
            <div className="mt-8 grid gap-6 border-t border-[#B8B9B4] pt-6 sm:grid-cols-3">
              <div>
                <h3 className="text-base font-medium text-gray-900">Собственная мастерская</h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-gray-600">Контролируем изготовление на каждом этапе.</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">Под заказ</h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-gray-600">Размеры, форма и отделка под ваш проект.</p>
              </div>
              <div>
                <h3 className="text-base font-medium text-gray-900">Подбор цвета</h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-gray-600">Помогаем подобрать подходящее покрытие.</p>
              </div>
            </div>
            <Link href="/about" className="group mt-8 inline-flex items-center gap-4 border-b border-[#C65D32] pb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-900 transition-colors hover:text-[#C65D32]">
              Подробнее о компании <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === БЛОК НАШИ ФАСАДЫ === */}
      <section className="w-full bg-[#E9E8E3] py-24 sm:py-32">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="flex items-end justify-between mb-16 border-b border-[#B8B9B4] pb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32] mb-3">Каталог</p>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
                Наши фасады
              </h2>
            </div>
            <Link 
              href="/catalog" 
              className="hidden sm:inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#C65D32] hover:text-[#C65D32] transition-colors border-b border-transparent hover:border-[#C65D32] pb-1"
            >
              Весь каталог →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8">
            {featuredFacades.map((facade) => (
              <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#D7D7D2]/70 mb-5 rounded-sm">
                  <Image
                    src={facade.image}
                    alt={facade.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-normal text-gray-900 group-hover:text-[#C65D32] transition-colors">
                  {facade.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2 font-normal leading-relaxed">
                  {facade.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <Link href="/catalog" className="site-button">
               Смотреть все
             </Link>
          </div>
        </div>
      </section>


      {/* === БЛОК ЗАМЕНА ФАСАДОВ === */}
      <section className="w-full bg-[#D7D7D2]/70 py-24 sm:py-32 border-t border-[#B8B9B4]">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#C65D32] mb-3">Реновация</p>
            <h2 className="text-3xl font-light tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Мебель в порядке? <br className="sm:hidden" /> Меняйте только фасады
            </h2>
            <p className="mt-6 text-base sm:text-lg font-normal text-gray-600 leading-relaxed">
              Если каркасы кухни или шкафа ещё служат, не обязательно менять
              всю мебель. Мы изготовим новые дверцы по вашим размерам —
              мебель заиграет как новая, а потратите в разы меньше.
            </p>
            <div className="mt-10">
              <Link
                href="/contacts"
                className="site-button"
              >
                Узнать стоимость
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
