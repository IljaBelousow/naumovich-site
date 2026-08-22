import Link from "next/link";
import Image from "next/image";
import Hero from "@/components/Hero";
import { facades } from "@/data/facades";

export default function Home() {
  // Берем первые 4 фасада из каталога
  const featuredFacades = facades.filter(f => f.category === "milled").slice(0, 4);

  return (
    <>
      <Hero />

      {/* Блок Наши фасады */}
      <section className="w-full bg-white py-24 sm:py-32">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="flex items-end justify-between mb-12 border-b border-gray-100 pb-6">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500 mb-2">Каталог</p>
              <h2 className="text-3xl sm:text-4xl font-extralight tracking-tight text-gray-900">
                Наши фасады
              </h2>
            </div>
            <Link 
              href="/catalog" 
              className="hidden sm:inline-block text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors"
            >
              Весь каталог →
            </Link>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {featuredFacades.map((facade) => (
              <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="group block">
                <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 mb-4">
                  <Image
                    src={facade.image}
                    alt={facade.name}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="text-lg font-light text-gray-900 group-hover:text-gray-500 transition-colors">
                  {facade.name}
                </h3>
                <p className="text-sm text-gray-500 mt-1 line-clamp-2">
                  {facade.description}
                </p>
              </Link>
            ))}
          </div>
          
          <div className="mt-12 text-center sm:hidden">
             <Link href="/catalog" className="inline-block border border-gray-900 px-8 py-3 text-xs font-medium uppercase tracking-[0.25em] text-gray-900">
               Смотреть все
             </Link>
          </div>
        </div>
      </section>

      {/* Блок Замена фасадов (который был раньше) */}
      <section className="w-full bg-gray-50 py-24 sm:py-32">
        <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-extralight tracking-tight text-gray-900 sm:text-4xl">
              Мебель в порядке? Меняйте только фасады
            </h2>
            <p className="mt-6 text-lg font-light text-gray-600">
              Если каркасы кухни или шкафа ещё служат, не обязательно менять
              всю мебель. Мы изготовим новые дверцы по вашим размерам —
              мебель заиграет как новая, а потратите в разы меньше.
            </p>
            <div className="mt-10">
              <Link
                href="/contacts"
                className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              >
                Узнать стоимость
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}