import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = { title: "Фрезерованные фасады МДФ — ИП Наумович" };

export default function MilledPage() {
  const items = facades.filter(f => f.category === "milled");

  return (
    <main className="w-full bg-white pt-20 min-h-screen">
      <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/catalog" className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-gray-900 mb-8 inline-block">
          ← Весь каталог
        </Link>
        
        <h1 className="text-4xl font-extralight tracking-tight text-gray-900 mb-12">Фрезерованные фасады МДФ</h1>

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