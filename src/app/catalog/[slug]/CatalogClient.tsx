"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import { useRouter } from "next/navigation";
import type { Facade } from "@/data/facades";

export default function CatalogClient({ 
  item, 
  allFacades 
}: { 
  item: Facade; 
  allFacades: Facade[];
}) {
  const [showEdgeProfile, setShowEdgeProfile] = useState(false);
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
          className="inline-flex items-center justify-center bg-gray-900 px-5 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 mb-8"
        >
          ← Назад в каталог
        </button>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="space-y-4">
            <ImageGallery images={item.gallery?.length ? item.gallery : [item.image]} title={item.name} />

            <div className="pt-1">
              <button
                type="button"
                onClick={() => setShowEdgeProfile((shown) => !shown)}
                aria-expanded={showEdgeProfile}
                className="group flex w-full items-center justify-between bg-gray-900 px-5 py-4 text-left text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2"
              >
                <span>{showEdgeProfile ? "Скрыть профиль края" : "Просмотреть профиль края"}</span>
                <span
                  aria-hidden="true"
                  className={`text-2xl font-light leading-none transition-transform duration-200 group-hover:translate-y-0.5 ${showEdgeProfile ? "rotate-180" : ""}`}
                >
                  ⌄
                </span>
              </button>

              {showEdgeProfile && (
                <div className="mt-4 border border-gray-200 bg-gray-50 p-3 sm:p-5">
                  <Image
                    src="/images/profil_kraya.jpg"
                    alt="Варианты профиля края фасада"
                    width={1200}
                    height={900}
                    sizes="(max-width: 768px) 100vw, 768px"
                    className="h-auto w-full object-contain"
                  />
                </div>
              )}
            </div>
          </div>

          <div className="flex flex-col justify-start self-start">
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
              <Link href="/contacts" className="inline-flex items-center justify-center bg-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2">
                Запросить расчёт
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-24 border-t border-gray-100 pt-14">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-extralight tracking-tight text-gray-900 sm:text-3xl">Похожее в каталоге</h2>
            <Link href="/catalog" className="inline-flex items-center justify-center bg-gray-900 px-5 py-3 text-xs font-medium uppercase tracking-[0.25em] text-white transition-all duration-300 hover:bg-gray-800 active:scale-[0.98] shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2 shrink-0">
              Весь каталог →
            </Link>
          </div>
          {similar.length > 0 && (
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
          )}
        </div>
      </div>
    </main>
  );
}