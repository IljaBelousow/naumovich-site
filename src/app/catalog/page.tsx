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
    <main className="w-full bg-white pt-20 min-h-screen">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl font-extralight tracking-tight text-gray-900 mb-12">
          Каталог
        </h1>

        <div className="border-t border-gray-200">
          {sections.map((section) => {
            const items = facades.filter((f) => f.category === section.id);

            return (
              <div key={section.id} className="border-b border-gray-200 py-12">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href={`/catalog/${section.id}`}
                    className="text-xl sm:text-2xl font-light text-gray-900 hover:underline decoration-gray-300 underline-offset-4"
                  >
                    {section.title}
                  </Link>
                  <Link
                    href={`/catalog/${section.id}`}
                    className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900"
                  >
                    Все →
                  </Link>
                </div>

                {section.id === "edge" ? (
                  <div className="max-w-3xl border border-gray-100 bg-gray-50 p-4">
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
                        <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
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