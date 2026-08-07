import Link from "next/link";

const categories = [
  { title: "Наши фасады", href: "/catalog" },
  { title: "Все фрезеровки", href: "/frezerovki" },
  { title: "Любые цвета RAL", href: "/catalog" },
  { title: "Патина", href: "/catalog" },
];

export default function CatalogPreview() {
  return (
    <section className="w-full bg-white py-24 sm:py-32">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        {categories.map((category) => (
          <Link
            key={category.title}
            href={category.href}
            className="group block border-t border-gray-100 py-10 first:border-t-0 sm:py-12"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="text-2xl font-extralight tracking-tight text-gray-900 transition-colors duration-300 group-hover:text-gray-500 sm:text-3xl">
                {category.title}
              </h2>
              <span className="hidden text-xs uppercase tracking-[0.25em] text-gray-400 transition-colors duration-300 group-hover:text-gray-900 sm:block">
                Смотреть →
              </span>
            </div>
            <div className="mt-6 grid grid-cols-4 gap-3 sm:grid-cols-8">
              {Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="aspect-square w-full bg-gray-100" />
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}