import Link from "next/link";

export const metadata = {
  title: "Как мы работаем — ИП Наумович",
  description:
    "Полный цикл производства крашеных фасадов МДФ: фрезеровка, подготовка, покраска, сушка и контроль качества.",
};

const steps = [
  {
    num: "01",
    title: "Фрезеровка",
    text: "Кроим и фрезеруем плиту МДФ точно по вашим размерам. Любой из 18 профилей края и любой рисунок на плоскости.",
  },
  {
    num: "02",
    title: "Подготовка",
    text: "Шлифуем и грунтуем поверхность — от этого зависит ровность и стойкость покрытия.",
  },
  {
    num: "03",
    title: "Покраска",
    text: "Красим в любой цвет RAL: матовое или глянцевое покрытие. Патина и эффекты — по желанию.",
  },
  {
    num: "04",
    title: "Сушка и контроль",
    text: "Сушим в камере, проверяем каждую деталь и упаковываем, чтобы фасад доехал без повреждений.",
  },
];

export default function ProductionPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          Как мы работаем
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
          Как мы делаем фасады
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-gray-600">
          Полный цикл в собственной мастерской — без посредников. Поэтому
          мы отвечаем за каждый миллиметр и каждый оттенок.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-gray-200 pt-6">
              <p className="text-sm font-light text-gray-400">{step.num}</p>
              <h2 className="mt-3 text-xl font-light text-gray-900">{step.title}</h2>
              <p className="mt-3 text-base font-light text-gray-600">{step.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 border-t border-gray-100 pt-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-xl text-lg font-light text-gray-600">
              Хотите посмотреть мастерскую или образцы вживую — приезжайте,
              покажем и подскажем.
            </p>
            <Link
              href="/contacts"
              className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
            >
              Записаться на визит
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}