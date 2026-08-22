"use client";

import { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { facades } from "@/data/facades";

export default function PortfolioPage() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Читаем начальные значения из URL или ставим дефолтные
  const initialTab = searchParams.get("tab") || "work_facades";
  const initialExpanded = searchParams.get("expanded") === "true";

  const [openSection, setOpenSection] = useState<string | null>(initialTab);
  const [expandedSections, setExpandedSections] = useState<string[]>(
    initialExpanded && initialTab ? [initialTab] : []
  );

  const sections = [
    { id: "work_facades", title: "Фасады изготовленные на заказ" },
    { id: "work_furniture", title: "Мебель изготовленная на заказ" },
  ];

  // Функция обновления URL (без перезагрузки страницы)
  const updateUrl = (tab: string | null, expandedList: string[]) => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (tab) {
      params.set("tab", tab);
      // Если раздел открыт, проверяем, раскрыт ли он полностью
      if (expandedList.includes(tab)) {
        params.set("expanded", "true");
      } else {
        params.delete("expanded");
      }
    } else {
      params.delete("tab");
      params.delete("expanded");
    }
    
    // Заменяем историю, чтобы кнопка "Назад" в браузере работала корректно
    router.replace(`/portfolio?${params.toString()}`, { scroll: false });
  };

  const handleSectionClick = (id: string) => {
    const newOpenSection = openSection === id ? null : id;
    setOpenSection(newOpenSection);
    
    // Если закрываем раздел, сбрасываем expanded для него (опционально, но логично)
    let newExpanded = [...expandedSections];
    if (newOpenSection === null) {
       // Можно оставить expanded как есть, чтобы при повторном открытии было удобно
       // Но для чистоты URL лучше обновить
    }
    
    updateUrl(newOpenSection, newExpanded);
  };

  const toggleExpand = (id: string) => {
    const newExpanded = expandedSections.includes(id) 
      ? expandedSections.filter(x => x !== id) 
      : [...expandedSections, id];
    
    setExpandedSections(newExpanded);
    updateUrl(openSection, newExpanded);
  };

  return (
    <main className="w-full bg-white pt-20 min-h-screen">
      <div className="w-full px-5 py-0 sm:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl font-extralight tracking-tight text-gray-900 mb-12">Наши работы</h1>

        <div className="border-t border-gray-200">
          {sections.map((section) => {
            const items = facades.filter((f) => f.category === section.id);
            const isOpen = openSection === section.id;
            const isExpanded = expandedSections.includes(section.id);
            const visibleItems = isExpanded ? items : items.slice(0, 4);

            return (
              <div key={section.id} className="border-b border-gray-200">
                <button
                  onClick={() => handleSectionClick(section.id)}
                  className="flex w-full cursor-pointer items-center justify-between py-6 text-left group"
                >
                  <span className={`text-xl sm:text-2xl font-light transition-colors ${isOpen ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"}`}>
                    {section.title}
                  </span>
                  <span className={`text-2xl font-light text-gray-400 transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}>
                    +
                  </span>
                </button>

                <div className={`grid overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? "grid-rows-[1fr] pb-12 opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
                  <div className="min-h-0">
                    {items.length === 0 ? (
                      <p className="text-gray-500 py-4">В этом разделе пока нет работ.</p>
                    ) : (
                      <>
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                          {visibleItems.map((item) => (
                            <Link key={item.slug} href={`/portfolio/${item.slug}`} className="group block cursor-pointer">
                              <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
                                <Image src={item.image} alt={item.name} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                              </div>
                              <h3 className="mt-3 text-sm font-medium text-gray-900">{item.name}</h3>
                            </Link>
                          ))}
                        </div>

                        {items.length > 4 && (
                          <div className="mt-10 text-center">
                            <button 
                              onClick={() => toggleExpand(section.id)}
                              className="cursor-pointer text-xs uppercase tracking-[0.2em] text-gray-500 hover:text-gray-900 border-b border-gray-300 pb-1 transition-colors"
                            >
                              {isExpanded ? "Свернуть" : `Показать все (${items.length})`}
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}