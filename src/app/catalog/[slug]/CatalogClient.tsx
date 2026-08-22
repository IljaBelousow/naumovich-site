"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Facade } from "@/data/facades";

export default function CatalogClient({ 
  item, 
  allFacades 
}: { 
  item: Facade; 
  allFacades: Facade[];
}) {
  const [activeImage, setActiveImage] = useState(item.image);
  const router = useRouter();
  
  const similar = allFacades
    .filter((f) => f.category === item.category && f.slug !== item.slug)
    .slice(0, 4);

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/catalog?tab=milled");
    }
  };

  return (
    <main className="w-full bg-white pt-24 min-h-screen">
      {/* Уменьшили отступы */}
      <div className="w-full px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        
        <button 
          onClick={handleBack}
          className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-gray-900 mb-8 inline-block cursor-pointer"
        >
          ← Назад в каталог
        </button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
              <Image src={activeImage} alt={item.name} fill className="object-cover" priority />
            </div>
            
            {item.gallery && item.gallery.length > 1 && (
              <div className="flex gap-2 overflow-x-auto pb-2">
                {item.gallery.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-20 w-16 shrink-0 overflow-hidden border-2 cursor-pointer ${
                      activeImage === img ? "border-gray-900" : "border-transparent opacity-60"
                    }`}
                  >
                    <Image src={img} alt="" fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
              {item.category === "milled" ? "Фрезерованный фасад" : "Деталь"}
            </p>
            <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
              {item.name}
            </h1>
            <p className="mt-6 text-lg font-light text-gray-600">{item.description}</p>

            <div className="mt-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">Исполнение</p>
              <ul className="mt-4 space-y-2 text-lg font-light text-gray-600">
                <li>Матовый / глянец</li>
                <li>Любой цвет RAL</li>
                <li>Шпонирование</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link href="/contacts" className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 hover:bg-gray-900 hover:text-white transition-colors cursor-pointer">
                Запросить расчёт
              </Link>
            </div>
          </div>
        </div>

        {similar.length > 0 && (
          <div className="mt-24 border-t border-gray-100 pt-14">
             <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-extralight tracking-tight text-gray-900 sm:text-3xl">Похожее в каталоге</h2>
                <button onClick={handleBack} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors cursor-pointer">
                   Весь каталог →
                </button>
             </div>
            <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
              {similar.map((f) => (
                <Link key={f.slug} href={`/catalog/${f.slug}`} className="group block cursor-pointer">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <Image src={f.image} alt={f.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-gray-900">{f.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}