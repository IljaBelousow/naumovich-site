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
    <main className="w-full bg-[#F1EEE7] min-h-screen">
      <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#202322] text-white sm:min-h-[500px]">
        <Image src="/images/hero/hero-main.jpg" alt="Примеры мебели и фасадов из МДФ" fill priority sizes="100vw" className="object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/85 via-[#141716]/45 to-[#141716]/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-12 pt-32 sm:px-12 sm:pb-16 lg:px-20">
          <p className="about-intro mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#E16A3A]">ИП Наумович · Наш опыт</p>
          <h1 className="about-intro max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Наши работы</h1>
          <p className="about-intro mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Фасады и мебель, созданные с вниманием к форме, материалам и отделке.</p>
        </div>
      </section>
      <div className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">

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