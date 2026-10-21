"use client";

import Link from "next/link";
import Image from "next/image";
import ImageGallery from "@/components/ImageGallery";
import { useRouter } from "next/navigation";
import type { Facade } from "@/data/facades";

export default function PortfolioClient({ 
  item, 
  allFacades 
}: { 
  item: Facade; 
  allFacades: Facade[];
}) {
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
  const categoryHref = item.category === "work_facades"
    ? "/portfolio/facades"
    : "/portfolio/furniture";

  return (
    <main className="w-full bg-white pt-24 min-h-screen">
      {/* Уменьшили py-16 до py-8, чтобы поднять контент */}
      <div className="w-full px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        <button 
          onClick={handleBack}
          className="site-button mb-8"
        >
          <span className="mr-2">←</span> Назад к работам
        </button>

        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-20">
          
          {/* Фото */}
          <div className="space-y-4">
            <ImageGallery images={item.gallery?.length ? item.gallery : [item.image]} title={item.name} />
          </div>

          {/* Описание */}
          <div className="flex flex-col justify-start self-start">
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
                className="site-button w-full sm:w-auto"
              >
                Связаться с нами
              </Link>
            </div>
          </div>
        </div>

        {/* Похожие */}
        <div className="mt-24 border-t border-gray-100 pt-16">
          <div className="flex items-center justify-between mb-8 gap-4">
            <h2 className="text-2xl font-extralight tracking-tight text-gray-900">Другие работы</h2>
            <Link href="/portfolio" className="site-button shrink-0">
              Все работы →
            </Link>
          </div>
          {similar.length > 0 && (
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
          )}
        </div>
      </div>
    </main>
  );
}