import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Наши работы — ИП Наумович",
  description: "Портфолио выполненных работ: крашеные фасады МДФ и мебель на заказ.",
};

export default function PortfolioPage() {
  const sections = [
    { id: "work_facades", title: "Фасады", link: "facades" },
    { id: "work_furniture", title: "Мебель", link: "furniture" },
  ];

  return (
    <main className="w-full bg-[#F1EEE7] pt-20 min-h-screen">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl font-light tracking-tight text-gray-900 mb-12">
          Наши работы
        </h1>

        <div className="border-t border-[#D8D0C3]">
          {sections.map((section) => {
            const items = facades.filter((f) => f.category === section.id);

            return (
              <div key={section.id} className="border-b border-[#D8D0C3] py-12">
                <div className="flex items-center justify-between mb-8">
                  <Link
                    href={`/portfolio/${section.link}`}
                    className="text-xl sm:text-2xl font-normal text-gray-900 hover:underline decoration-[#82745F]/60 underline-offset-4"
                  >
                    {section.title}
                  </Link>
                  <Link
                    href={`/portfolio/${section.link}`}
                    className="text-xs uppercase tracking-[0.2em] text-[#82745F] hover:text-[#82745F]"
                  >
                    Все →
                  </Link>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                  {items.slice(0, 4).map((item) => (
                    <Link
                      key={item.slug}
                      href={`/portfolio/${item.slug}`}
                      className="group block"
                    >
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#E5E0D6]">
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
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}