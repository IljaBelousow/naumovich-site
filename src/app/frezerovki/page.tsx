import Link from "next/link";
import Image from "next/image";
import { millings } from "@/data/millings";

export const metadata = {
  title: "Фрезеровки фасадов МДФ — ИП Наумович",
  description:
    "Любые фрезеровки крашеных фасадов МДФ: линии, сетка, рамка, диагональ, классика. Изготовим по вашему эскизу.",
};

export default function FrezerovkiPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          Фрезеровки
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
          Рисунок фасада
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-gray-600">
          Любой рисунок фрезеровки — от строгой геометрии до классики.
          Все варианты исполняются в любом цвете RAL.
        </p>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {millings.map((milling) => (
            <div key={milling.slug}>
              <div
                className="aspect-square w-full border border-gray-100 bg-white"
                style={milling.pattern}
              />
              <h2 className="mt-4 text-lg font-light text-gray-900">{milling.name}</h2>
              <p className="mt-1 text-sm font-light text-gray-500">{milling.description}</p>
            </div>
          ))}
        </div>

        {/* Профиль края */}
        <div className="mt-20 border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-extralight tracking-tight text-gray-900 sm:text-3xl">
            Профиль края
          </h2>
          <p className="mt-4 max-w-2xl text-lg font-light text-gray-600">
            Помимо рисунка на плоскости, выберите форму кромки — 18 типов
            профиля. Назовите номер при заказе.
          </p>
          <div className="relative mt-10 aspect-[3/4] w-full max-w-xl overflow-hidden border border-gray-100 bg-gray-50">
            <Image
              src="/images/catalog1/image18.png"
              alt="Профиль края — 18 типов фрезеровки"
              fill
              sizes="(max-width: 576px) 100vw, 576px"
              className="object-contain"
            />
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-gray-100 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg font-light text-gray-600">
            Не нашли нужный рисунок? Изготовим фрезеровку по вашему эскизу
            или фотографии.
          </p>
          <Link
            href="/contacts"
            className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
          >
            Обсудить эскиз
          </Link>
        </div>
      </div>
    </main>
  );
}