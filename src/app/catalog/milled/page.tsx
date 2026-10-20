import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = { title: "Фрезерованные фасады МДФ — ИП Наумович" };

export default function MilledPage() {
  const items = facades.filter(f => f.category === "milled");

  return (
    <main className="w-full min-h-screen bg-[#E9E8E3]">
      <section className="relative isolate flex min-h-[300px] items-end overflow-hidden bg-[#202322] text-[#E9E8E3] sm:min-h-[360px]">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Фрезерованные фасады МДФ"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_30%] opacity-55"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/78 via-[#141716]/35 to-[#141716]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141716]/55 via-transparent to-[#141716]/10" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-8 pt-24 sm:px-12 sm:pb-10 lg:px-20">
          <p className="about-intro mb-6 flex items-center gap-3 text-[11px] font-medium uppercase tracking-[0.32em] text-[#E16A3A]">
            <span className="h-px w-9 bg-[#E16A3A]" /> Каталог · ИП Наумович
          </p>
          <h1 className="about-intro max-w-5xl text-4xl font-bold leading-[1.08] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Фрезерованные фасады МДФ
          </h1>
        </div>
      </section>

      <div className="w-full px-5 py-10 sm:px-8 sm:py-14 lg:px-12 xl:px-16">
        <Link href="/catalog" className="text-xs uppercase tracking-[0.25em] text-gray-500 hover:text-gray-900 mb-8 inline-block">
          ← Весь каталог
        </Link>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <Link key={item.slug} href={`/catalog/${item.slug}`} className="group block">
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
              </div>
              <h3 className="mt-3 text-sm font-medium text-gray-900">{item.name}</h3>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}