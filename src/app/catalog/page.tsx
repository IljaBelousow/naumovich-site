import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Каталог — ИП Наумович",
  description: "Каталог фрезерованных фасадов МДФ, интегрированных ручек и профилей края.",
};

export default function CatalogPage() {
  const sections = [
    { id: "milled", title: "Фрезерованные фасады МДФ" },
    { id: "handles", title: "Интегрированные ручки" },
    { id: "edge", title: "Профиль края" },
  ];

  return (
    <main className="w-full bg-[#E9E8E3] min-h-screen">
      <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#202322] text-white sm:min-h-[500px]">
        <Image src="/images/hero/hero-main.jpg" alt="Каталог мебели и фасадов из МДФ" fill priority sizes="100vw" className="object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/85 via-[#141716]/45 to-[#141716]/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-12 pt-32 sm:px-12 sm:pb-16 lg:px-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#E16A3A]">ИП Наумович · Изготовление на заказ</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Каталог фасадов и мебели</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Фрезерованные фасады МДФ, интегрированные ручки и профиль края.</p>
        </div>
      </section>
      <div className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">

        <div className="border-t border-[#B8B9B4]">
          {sections.map((section) => {
            const items = facades.filter((f) => f.category === section.id);

            return (
              <div key={section.id} className="border-b border-[#B8B9B4] py-12">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href={`/catalog/${section.id}`}
                    className="text-xl sm:text-2xl font-normal text-gray-900 hover:underline decoration-[#C65D32]/60 underline-offset-4"
                  >
                    {section.title}
                  </Link>
                  <Link
                    href={`/catalog/${section.id}`}
                    className="text-xs uppercase tracking-[0.2em] text-[#C65D32] hover:text-[#C65D32]"
                  >
                    Все 
                  </Link>
                </div>

                {section.id === "edge" ? (
                  <div className="max-w-3xl border border-[#B8B9B4] bg-[#D7D7D2]/70 p-4">
                    <Image
                      src={items[0]?.image || "/images/profil_kraya.jpg"}
                      alt="Профиль края"
                      width={1000}
                      height={1200}
                      className="w-full h-auto object-contain"
                      priority
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {items.slice(0, 4).map((item) => (
                      <Link
                        key={item.slug}
                        href={`/catalog/${item.slug}`}
                        className="group block"
                      >
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#D7D7D2]">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                        <h3 className="mt-3 text-sm font-medium text-gray-900">
                          {item.name}
                        </h3>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}