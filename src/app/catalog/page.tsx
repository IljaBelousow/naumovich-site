"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export default function CatalogPage() {
  const [openSection, setOpenSection] = useState<string | null>("milled");
  const [expandedSections, setExpandedSections] = useState<string[]>([]);

  const sections = [
    { id: "milled", title: "Фрезерованные фасады МДФ" },
    { id: "handles", title: "Интегрированные ручки" },
    { id: "edge", title: "Профиль края" },
  ];

  const toggleExpand = (sectionId: string) => {
    setExpandedSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId]
    );
  };

  return (
    <main className="w-full bg-white pt-20 min-h-screen">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <h1 className="text-4xl font-extralight tracking-tight text-gray-900 mb-12">
          Каталог
        </h1>

        <div className="border-t border-gray-200">
          {sections.map((section) => {
            const items = facades.filter((f) => f.category === section.id);
            const isOpen = openSection === section.id;
            const isExpanded = expandedSections.includes(section.id);
            const visibleItems = isExpanded ? items : items.slice(0, 4);

            return (
              <div key={section.id} className="border-b border-gray-200">
                <button
                  onClick={() => setOpenSection(isOpen ? null : section.id)}
                  className="flex w-full cursor-pointer items-center justify-between py-6 text-left group"
                >
                  <Link
                    href={`/catalog/${section.id}`}
                    className={`text-xl sm:text-2xl font-light transition-colors hover:underline decoration-gray-300 underline-offset-4 ${
                      isOpen ? "text-gray-900" : "text-gray-500 group-hover:text-gray-900"
                    }`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    {section.title}
                  </Link>
                  <span className="text-sm font-light text-gray-400 ml-4">
                    {isOpen ? "▲" : "▼"}
                  </span>
                </button>

                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-[5000px] opacity-100 pb-12" : "max-h-0 opacity-0"
                  }`}
                >
                  {section.id === "edge" ? (
                    <div className="max-w-3xl border border-gray-100 bg-gray-50 p-4">
                      <Image
                        src={items[0]?.image || "/images/profil_kraya.jpg"}
                        alt="Профиль края"
                        width={1000}
                        height={1200}
                        className="w-full h-auto object-contain"
                      />
                    </div>
                  ) : (
                    <>
                      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                        {visibleItems.map((item) => (
                          <Link
                            key={item.slug}
                            href={`/catalog/${item.slug}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block cursor-pointer"
                          >
                            <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
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
            );
          })}
        </div>
      </div>
    </main>
  );
}