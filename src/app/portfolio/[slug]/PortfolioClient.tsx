"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import type { Facade } from "@/data/facades";

export default function PortfolioClient({ 
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
      router.push("/portfolio?tab=work_facades");
    }
  };

  // Ссылка для категории
  const categoryHref = item.category === 'work_facades' 
    ? "/portfolio?tab=work_facades" 
    : "/portfolio?tab=work_furniture";

  return (
    <main className="w-full bg-white pt-24 min-h-screen">
      {/* Уменьшили py-16 до py-8, чтобы поднять контент */}
      <div className="w-full px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        
        <button 
          onClick={handleBack}
          className="inline-flex items-center text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-gray-900 transition-colors mb-8 cursor-pointer"
        >
          <span className="mr-2">←</span> Назад к работам
        </button>

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Фото */}
          <div className="space-y-4">
            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100 border border-gray-100">
              <Image
                src={activeImage}
                alt={item.name}
                fill
                className="object-cover"
                priority
              />
            </div>

            {item.gallery && item.gallery.length > 1 && (
              <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
                {item.gallery.map((img, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveImage(img)}
                    className={`relative h-24 w-20 shrink-0 overflow-hidden border-2 transition-all duration-200 cursor-pointer ${
                      activeImage === img 
                        ? "border-gray-900 opacity-100" 
                        : "border-transparent opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image src={img} alt={`${item.name} view ${index + 1}`} fill className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Описание */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
              Наши работы
            </p>
            <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
              {item.name}
            </h1>
            
            <div className="mt-8 h-px w-full bg-gray-100" />
            
            <p className="mt-8 text-lg font-light leading-relaxed text-gray-600">
              {item.description}
            </p>

            <div className="mt-10 space-y-4">
               <div>
                 <span className="block text-xs uppercase tracking-wider text-gray-400 mb-1">Категория</span>
                 {/* Сделали ссылку */}
                 <Link 
                    href={categoryHref}
                    className="text-gray-900 font-light hover:text-gray-500 transition-colors cursor-pointer border-b border-transparent hover:border-gray-300 inline-block"
                 >
                   {item.category === 'work_facades' ? 'Фасады на заказ' : 'Мебель на заказ'}
                 </Link>
               </div>
            </div>

            <div className="mt-12">
              <Link
                href="/contacts"
                className="inline-block w-full sm:w-auto text-center border border-gray-900 px-10 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white cursor-pointer"
              >
                Заказать такой же
              </Link>
            </div>
          </div>
        </div>

        {/* Похожие */}
        {similar.length > 0 && (
          <div className="mt-24 border-t border-gray-100 pt-16">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-extralight tracking-tight text-gray-900">Другие работы</h2>
              <button onClick={handleBack} className="text-xs uppercase tracking-[0.2em] text-gray-400 hover:text-gray-900 transition-colors cursor-pointer">
                Все работы →
              </button>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {similar.map((work) => (
                <Link key={work.slug} href={`/portfolio/${work.slug}`} className="group block cursor-pointer">
                  <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                    <Image src={work.image} alt={work.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <h3 className="mt-3 text-sm font-medium text-gray-900">{work.name}</h3>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  );
}