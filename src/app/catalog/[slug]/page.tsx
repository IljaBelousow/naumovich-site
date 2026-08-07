import Link from "next/link";
import { notFound } from "next/navigation";
import FacadeCard from "@/components/FacadeCard";
import { facades, getFacade } from "@/data/facades";

export function generateStaticParams() {
  return facades.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const facade = getFacade(slug);
  return {
    title: `${facade?.name ?? "Фасад"} — крашеный фасад МДФ | ИП Наумович`,
  };
}

export default async function FacadePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const facade = getFacade(slug);
  if (!facade) notFound();

  const similar = facades.filter((f) => f.slug !== slug).slice(0, 4);

  return (
    <main className="w-full bg-white pt-20">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <Link
          href="/catalog"
          className="text-xs uppercase tracking-[0.25em] text-gray-400 transition-colors hover:text-gray-900"
        >
          ← Каталог
        </Link>

        <div className="mt-10 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Фото */}
          <div className="relative aspect-[3/4] w-full bg-gray-100">
            <span className="absolute inset-0 flex items-center justify-center text-8xl font-extralight text-gray-300">
              {facade.name.charAt(0)}
            </span>
          </div>

          {/* Описание */}
          <div className="flex flex-col justify-center">
            <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
              Фасад МДФ
            </p>
            <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
              {facade.name}
            </h1>
            <p className="mt-6 text-lg font-light text-gray-600">
              {facade.description}
            </p>

            <div className="mt-10">
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-gray-900">
                Исполнение
              </p>
              <ul className="mt-4 space-y-2 text-lg font-light text-gray-600">
                <li>Эмаль</li>
                <li>Матовый / глянец</li>
                <li>Любой цвет RAL</li>
                <li>Патина — опционально</li>
              </ul>
            </div>

            <div className="mt-12">
              <Link
                href="/contacts"
                className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
              >
                Запросить расчёт
              </Link>
            </div>
          </div>
        </div>

        {/* Похожие фасады */}
        <div className="mt-24 border-t border-gray-100 pt-14">
          <h2 className="text-2xl font-extralight tracking-tight text-gray-900 sm:text-3xl">
            Похожие фасады
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
            {similar.map((f) => (
              <FacadeCard key={f.slug} facade={f} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}