import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export default function Home() {
  // Берем первые 4 фасада из каталога
  const featuredFacades = facades.filter(f => f.category === "milled").slice(0, 4);

  return (
    <main className="w-full bg-[#F1EEE7] antialiased">
      
      {/* === ГЛАВНАЯ КАРТИНКА (HERO) === */}
      <section className="relative h-[100svh] min-h-[600px] w-full overflow-hidden bg-gray-950">
        <Image
          src="/images/hero/hero-main.jpg" 
          alt="Крашеные фасады МДФ на заказ"
          fill
          priority
          className="object-cover object-center opacity-40 transition-transform duration-1000 hover:scale-105"
        />
        
        {/* Затемняющий оверлей для идеальной читаемости белого текста */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/50 z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 max-w-5xl mx-auto">
          
          {/* Аккуратная надпись над заголовком с правильным отступом */}
          <p className="text-xs font-normal uppercase tracking-[0.4em] text-white/60 mb-5 sm:mb-6">
            ИП НАУМОВИЧ
          </p>
          
          {/* Заголовок */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-tight mb-6 drop-shadow-lg">
            Мебельные детали из МДФ — <br className="hidden sm:block" />
            <span className="font-semibold block mt-2 sm:inline sm:mt-0">крашеные и шпонированные</span>
          </h1>
          
          {/* Подзаголовок: зафиксировали ровный перенос, текст больше не наезжает на преимущества */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-normal max-w-3xl mb-12 leading-relaxed">
            Собственная мастерская. <br className="hidden sm:block" />
            Мебель на заказ по индивидуальным параметрам в Минске.
          </p>
          
          {/* Преимущества: чистый минималистичный вариант, как на вашем последнем скриншоте */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-3 sm:gap-x-12 text-xs sm:text-sm font-normal uppercase tracking-[0.25em] text-white/80 mb-12">
            <span className="transition-opacity duration-300 hover:text-white">Любые размеры</span>
            <span className="transition-opacity duration-300 hover:text-white">Любые цвета</span>
            <span className="transition-opacity duration-300 hover:text-white">Любые фрезеровки</span>
          </div>
          
          {/* Кнопка */}
          <Link
            href="/catalog"
            className="site-button-on-dark group"
          >
            Смотреть каталог <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
          </Link>
        </div>
      </section>
      {/* === КОНЕЦ ГЛАВНОЙ КАРТИНКИ === */}


      {/* === О КОМПАНИИ: первый информационный блок главной === */}
      <section id="about" className="w-full bg-[#E5E0D6] py-20 sm:py-28">
        <div className="mx-auto grid w-full max-w-[1600px] gap-12 px-6 sm:px-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start lg:gap-20 lg:px-20 xl:px-24">
          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.35em] text-[#82745F]">О компании</p>
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
            <div className="mt-8 grid gap-6 border-t border-[#D8D0C3] pt-6 sm:grid-cols-3">
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
            <Link href="/about" className="group mt-8 inline-flex items-center gap-4 border-b border-[#82745F] pb-2 text-xs font-medium uppercase tracking-[0.2em] text-gray-900 transition-colors hover:text-[#82745F]">
              Подробнее о компании <span aria-hidden="true" className="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </section>

      {/* === БЛОК НАШИ ФАСАДЫ === */}
      <section className="w-full bg-[#F1EEE7] py-24 sm:py-32">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="flex items-end justify-between mb-16 border-b border-[#D8D0C3] pb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#82745F] mb-3">Каталог</p>
              <h2 className="text-3xl sm:text-4xl font-light tracking-tight text-gray-900">
                Наши фасады
              </h2>
            </div>
            <Link 
              href="/catalog" 
              className="hidden sm:inline-block text-xs font-medium uppercase tracking-[0.2em] text-[#82745F] hover:text-[#82745F] transition-colors border-b border-transparent hover:border-[#82745F] pb-1"
            >
              Весь каталог →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8">
            {featuredFacades.map((facade) => (
              <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5E0D6]/70 mb-5 rounded-sm">
                  <Image
                    src={facade.image}
                    alt={facade.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-normal text-gray-900 group-hover:text-[#82745F] transition-colors">
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
      <section className="w-full bg-[#E5E0D6]/70 py-24 sm:py-32 border-t border-[#D8D0C3]">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#82745F] mb-3">Реновация</p>
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
