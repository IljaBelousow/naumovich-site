import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = { title: "Фасады на заказ — ИП Наумович" };

export default function PortfolioFacadesPage() {
  const items = facades.filter((f) => f.category === "work_facades");

  return (
    <main className="w-full min-h-screen bg-[#E9E8E3]">
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[360px]">
        <Image
          src="/images/catalog1/image1.jpg"
          alt="Фасады из МДФ на заказ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-65"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/80 via-[#141716]/40 to-[#141716]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/65 via-transparent to-transparent" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-8 pt-24 sm:px-12 sm:pb-10 lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E16A3A]">
            <span className="h-px w-9 bg-[#E16A3A]" /> Портфолио · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Фасады на заказ
          </h1>
          <p className="about-intro mt-6 max-w-2xl text-base leading-8 text-white/80 sm:text-lg">
            Примеры фасадов из МДФ, выполненных с вниманием к форме, отделке и деталям.
          </p>
        </div>
      </section>

      <div className="mx-auto w-full max-w-[1600px] px-5 py-10 sm:px-8 sm:py-14 lg:px-12 xl:px-16">
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {items.length === 0 ? <p className="text-gray-500">В этом разделе пока нет работ.</p> : items.map((item) => (
            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group block">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image src={item.image} alt={item.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-gray-900">{item.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
