import Link from "next/link";
import Hero from "@/components/Hero";
import CatalogPreview from "@/components/CatalogPreview";

export default function Home() {
  return (
    <>
      <Hero />
      <CatalogPreview />

      {/* Замена фасадов */}
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