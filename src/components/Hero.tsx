import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative bg-white pt-20">
      <div className="grid min-h-[calc(100vh-5rem)] w-full grid-cols-1 items-stretch gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12 xl:px-16">
        {/* Текст */}
        <div className="flex flex-col justify-center py-16 lg:py-0">
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
            ИП Наумович
          </p>
          <h1 className="mt-6 text-4xl font-extralight leading-[1.1] tracking-tight text-gray-900 sm:text-5xl xl:text-6xl">
            Производство крашеных фасадов&nbsp;МДФ
          </h1>
          <ul className="mt-8 space-y-1 text-lg font-light text-gray-600">
            <li>Любые размеры</li>
            <li>Любые цвета</li>
            <li>Любые фрезеровки</li>
          </ul>
          <div className="mt-12">
            <Link
              href="/catalog"
              className="inline-block border border-gray-900 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
            >
              Смотреть каталог
            </Link>
          </div>
        </div>

        {/* Фото */}
        <div className="relative min-h-[420px] lg:min-h-full">
          <div
            className="absolute inset-0 bg-gray-100 bg-cover bg-center"
            style={{ backgroundImage: "url('/images/hero-kitchen.jpg')" }}
            role="img"
            aria-label="Кухня с крашеными фасадами МДФ"
          />
        </div>
      </div>
    </section>
  );
}