import FacadeCard from "@/components/FacadeCard";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Каталог фасадов МДФ — ИП Наумович",
  description:
    "Крашеные фасады МДФ под заказ: любые фрезеровки, любые цвета RAL, матовое и глянцевое исполнение.",
};

export default function CatalogPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          Каталог
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
          Фасады МДФ
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-gray-600">
          Крашеные и шпонированные фасады изготавливаются под заказ: любой
          размер, любой цвет RAL, матовое или глянцевое исполнение.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {facades.map((facade) => (
            <FacadeCard key={facade.slug} facade={facade} />
          ))}
        </div>
      </div>
    </main>
  );
}