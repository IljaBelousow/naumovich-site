"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Facade } from "@/data/facades";

export default function CatalogClient({ item, allFacades }: { item: Facade; allFacades: Facade[] }) {
  const [activeImage, setActiveImage] = useState(item.image);
  const router = useRouter();
  const gallery = Array.from(new Set([item.image, ...(item.gallery || [])]));
  const similar = allFacades.filter((f) => f.category === item.category && f.slug !== item.slug && !f.category.startsWith("work_")).slice(0, 4);
  const handleBack = () => {
    if (window.history.length > 1) router.back();
    else router.push("/catalog#milled");
  };

  return (
    <main className="min-h-screen bg-[#fbfaf7] pt-20 text-[#24231f]">
      <div className="mx-auto max-w-[1600px] px-5 py-8 sm:px-10 sm:py-12 lg:px-16 xl:px-24">
        <button onClick={handleBack} className="mb-8 inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#77766f] hover:text-[#9b7950]">← Назад в каталог</button>
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div>
            <div className="relative aspect-[4/5] overflow-hidden bg-[#efede7] sm:aspect-[5/4] lg:aspect-[4/5]">
              <Image src={activeImage} alt={item.name} fill priority sizes="(max-width: 1024px) 100vw, 55vw" className="object-contain p-3 sm:p-6" />
            </div>
            {gallery.length > 1 && <div className="mt-3 grid grid-cols-5 gap-2 sm:grid-cols-6">{gallery.map((img) => <button key={img} onClick={() => setActiveImage(img)} aria-label="Показать изображение" className={`relative aspect-square overflow-hidden border bg-[#efede7] ${activeImage === img ? "border-[#9b7950]" : "border-transparent opacity-65 hover:opacity-100"}`}><Image src={img} alt="" fill sizes="100px" className="object-cover" /></button>)}</div>}
          </div>
          <div className="flex flex-col justify-center py-2 lg:py-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#9b7950]">{item.category === "milled" ? "Коллекция / Фрезерованные фасады" : item.category === "handles" ? "Коллекция / Ручки" : "Коллекция / Профили"}</p>
            <h1 className="mt-4 text-4xl font-light leading-tight tracking-[-0.04em] sm:text-6xl">{item.name}</h1>
            <p className="mt-5 text-base leading-7 text-[#77766f] sm:text-lg">{item.description || "Мебельная деталь МДФ, изготовленная по индивидуальным параметрам."}</p>
            <div className="mt-8 grid grid-cols-2 gap-3">
              <div className="border border-[#e4e1d9] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#9b7950]">Размер</p><p className="mt-2 text-sm">По вашему проекту</p></div>
              <div className="border border-[#e4e1d9] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#9b7950]">Отделка</p><p className="mt-2 text-sm">Матовая / глянцевая</p></div>
              <div className="border border-[#e4e1d9] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#9b7950]">Цвет</p><p className="mt-2 text-sm">Подбор по RAL, NCS и др.</p></div>
              <div className="border border-[#e4e1d9] p-4"><p className="text-[9px] uppercase tracking-[0.16em] text-[#9b7950]">Изготовление</p><p className="mt-2 text-sm">Под заказ</p></div>
            </div>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link href="/contacts" className="inline-flex min-h-14 items-center justify-center bg-[#24231f] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] text-white hover:bg-[#9b7950]">Запросить расчёт ↗</Link>
              <a href="tel:+375259929001" className="inline-flex min-h-14 items-center justify-center border border-[#cfc8bb] px-7 text-[10px] font-semibold uppercase tracking-[0.16em] hover:border-[#24231f]">+375 25 992-90-01</a>
            </div>
          </div>
        </div>
        {similar.length > 0 && <section className="mt-16 border-t border-[#e4e1d9] pt-10 sm:mt-24 sm:pt-14">
          <div className="mb-8 flex items-end justify-between gap-4"><div><p className="text-[10px] uppercase tracking-[0.22em] text-[#9b7950]">Продолжить выбор</p><h2 className="mt-3 text-2xl font-light sm:text-4xl">Похожие модели</h2></div><Link href="/catalog#milled" className="text-[10px] font-semibold uppercase tracking-[0.14em] hover:text-[#9b7950]">Весь каталог →</Link></div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-6">{similar.map((f) => <Link key={f.slug} href={`/catalog/${f.slug}`} className="group"><div className="relative aspect-[4/5] overflow-hidden bg-[#efede7]"><Image src={f.image} alt={f.name} fill sizes="(max-width: 640px) 50vw, 25vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.04]" /></div><h3 className="mt-3 text-sm font-medium">{f.name}</h3><p className="mt-1 text-xs text-[#77766f]">Фасад МДФ под заказ</p></Link>)}</div>
        </section>}
      </div>
    </main>
  );
}