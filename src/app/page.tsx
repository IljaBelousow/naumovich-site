import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export default function Home() {
  // Берем первые 4 фасада из каталога
  const featuredFacades = facades.filter(f => f.category === "milled").slice(0, 4);

  return (
    <main className="w-full bg-white antialiased">
      
      {/* === ГЛАВНАЯ КАРТИНКА (HERO) === */}
      <section className="relative w-full h-[70vh] sm:h-[80vh] lg:h-[90vh] bg-gray-950 overflow-hidden">
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
          <p className="text-xs font-light uppercase tracking-[0.4em] text-white/60 mb-5 sm:mb-6">
            ИП НАУМОВИЧ
          </p>
          
          {/* Заголовок */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extralight text-white tracking-tight leading-tight mb-6">
            Мебельные детали из МДФ — <br className="hidden sm:block" />
            <span className="font-normal block mt-2 sm:inline sm:mt-0">крашеные и шпонированные</span>
          </h1>
          
          {/* Подзаголовок: зафиксировали ровный перенос, текст больше не наезжает на преимущества */}
          <p className="text-base sm:text-lg lg:text-xl text-gray-200 font-light max-w-3xl mb-12 leading-relaxed">
            Собственная мастерская. <br className="hidden sm:block" />
            Мебель на заказ по индивидуальным параметрам в Минске.
          </p>
          
          {/* Преимущества: чистый минималистичный вариант, как на вашем последнем скриншоте */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-y-3 sm:gap-x-12 text-xs sm:text-sm font-light uppercase tracking-[0.25em] text-white/80 mb-12">
            <span className="transition-opacity duration-300 hover:text-white">Любые размеры</span>
            <span className="transition-opacity duration-300 hover:text-white">Любые цвета</span>
            <span className="transition-opacity duration-300 hover:text-white">Любые фрезеровки</span>
          </div>
          
          {/* Кнопка */}
          <Link
            href="/catalog"
            className="bg-white text-gray-950 px-10 py-4 text-xs font-semibold uppercase tracking-[0.25em] hover:bg-gray-100 active:scale-98 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Смотреть каталог
          </Link>
        </div>
      </section>
      {/* === КОНЕЦ ГЛАВНОЙ КАРТИНКИ === */}


      {/* === БЛОК НАШИ ФАСАДЫ === */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="flex items-end justify-between mb-16 border-b border-gray-100 pb-8">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-3">Каталог</p>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-gray-900">
                Наши фасады
              </h2>
            </div>
            <Link 
              href="/catalog" 
              className="hidden sm:inline-block text-xs font-medium uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors border-b border-transparent hover:border-gray-900 pb-1"
            >
              Весь каталог →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 sm:gap-x-8">
            {featuredFacades.map((facade) => (
              <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-50 mb-5 rounded-sm">
                  <Image
                    src={facade.image}
                    alt={facade.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-base sm:text-lg font-normal text-gray-900 group-hover:text-gray-600 transition-colors">
                  {facade.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-2 line-clamp-2 font-light leading-relaxed">
                  {facade.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <Link href="/catalog" className="inline-block border border-gray-900 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 active:bg-gray-900 active:text-white transition-colors">
               Смотреть все
             </Link>
          </div>
        </div>
      </section>


      {/* === БЛОК ЗАМЕНА ФАСАДОВ === */}
      <section className="w-full bg-gray-50 py-24 sm:py-32 border-t border-gray-100">
        <div className="w-full px-6 sm:px-12 lg:px-20 xl:px-24">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-gray-400 mb-3">Реновация</p>
            <h2 className="text-3xl font-extralight tracking-tight text-gray-900 sm:text-4xl leading-tight">
              Мебель в порядке? <br className="sm:hidden" /> Меняйте только фасады
            </h2>
            <p className="mt-6 text-base sm:text-lg font-light text-gray-600 leading-relaxed">
              Если каркасы кухни или шкафа ещё служат, не обязательно менять
              всю мебель. Мы изготовим новые дверцы по вашим размерам —
              мебель заиграет как новая, а потратите в разы меньше.
            </p>
            <div className="mt-10">
              <Link
                href="/contacts"
                className="inline-block bg-gray-900 text-white px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] transition-all duration-300 hover:bg-gray-800 active:scale-98 shadow-sm"
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
