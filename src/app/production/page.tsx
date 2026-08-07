import Link from "next/link";

export const metadata = {
  title: "Производство — ИП Наумович",
  description:
    "Собственное производство крашеных фасадов МДФ: раскрой, фрезеровка на станках с ЧПУ, окраска, сушка, контроль качества.",
};

const steps = [
  { num: "01", title: "Раскрой и фрезеровка", text: "Плита МДФ раскраивается по вашим размерам, станок с ЧПУ наносит рисунок фрезеровки." },
  { num: "02", title: "Подготовка", text: "Поверхность шлифуется и покрывается грунтом — основа для ровной окраски." },
  { num: "03", title: "Окраска", text: "Красим эмалью в окрасочной камере. Любой цвет по палитре RAL." },
  { num: "04", title: "Сушка", text: "Сушим в сушильной камере с соблюдением технологии — покрытие без пыли и шагрени." },
  { num: "05", title: "Контроль и упаковка", text: "Проверяем каждый фасад, упаковываем и передаём на доставку." },
];

export default function ProductionPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          О производстве
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
          Как мы делаем фасады
        </h1>

        <div className="mt-14 border-b border-gray-100">
          {steps.map((step) => (
            <div
              key={step.num}
              className="grid grid-cols-[64px_1fr] gap-6 border-t border-gray-100 py-8 sm:grid-cols-[96px_1fr]"
            >
              <span className="text-xl font-extralight text-gray-300 sm:text-2xl">
                {step.num}
              </span>
              <div>
                <h2 className="text-xl font-light text-gray-900 sm:text-2xl">{step.title}</h2>
                <p className="mt-2 max-w-2xl text-base font-light text-gray-600 sm:text-lg">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 sm:grid-cols-3">
          <div>
            <p className="text-2xl font-extralight text-gray-900 sm:text-3xl">Полный цикл</p>
            <p className="mt-3 text-base font-light text-gray-600">
              Раскрой, фрезеровка, окраска и сушка — на нашем производстве, без посредников.
            </p>
          </div>
          <div>
            <p className="text-2xl font-extralight text-gray-900 sm:text-3xl">Срок от 10 дней</p>
            <p className="mt-3 text-base font-light text-gray-600">
              Точный срок зависит от тиража и сложности фрезеровки.
            </p>
          </div>
          <div>
            <p className="text-2xl font-extralight text-gray-900 sm:text-3xl">Гарантия качества</p>
            <p className="mt-3 text-base font-light text-gray-600">
              Проверяем каждый фасад перед отгрузкой.
            </p>
          </div>
        </div>

        <div className="mt-16">
          <Link
            href="/catalog"
            className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
          >
            Смотреть каталог
          </Link>
        </div>
      </div>
    </main>
  );
}