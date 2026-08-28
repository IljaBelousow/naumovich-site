import Link from "next/link";

export const metadata = {
  title: "Производство — ИП Наумович",
  description: "Полный цикл производства крашеных фасадов МДФ: фрезеровка, грунтование, покраска.",
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
    text: "Шлифуем поверхность и наносим первый слой грунта-изолятора. Он запечатывает поры МДФ, предотвращает поднятие ворса и создает барьер для смол.",
  },
  {
    num: "03",
    title: "Грунтование и Покраска",
    text: (
      <>
        <p className="mb-4">
          Наносим второй слой — наполняющий грунт, который выравнивает микронеровности и создает идеальную основу.
        </p>
        <p>
          Красим в любой цвет по системам <strong>RAL, WCP, NCS, Caparol</strong>. 
          Возможен профессиональный подбор цвета под ваш интерьер. 
          Делаем матовые, глянцевые покрытия, патину и эффекты.
        </p>
      </>
    ),
  },
  {
    num: "04",
    title: "Сушка и контроль",
    text: "Сушим в камере при правильной температуре, проверяем каждую деталь на дефекты и надежно упаковываем, чтобы фасад доехал без повреждений.",
  },
];

export default function ProductionPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          Как мы работаем
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extralight leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Как мы делаем фасады
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light text-gray-600">
          Полный цикл в собственной мастерской — без посредников. Поэтому мы отвечаем за каждый миллиметр и каждый оттенок.
        </p>

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-gray-200 pt-6">
              <span className="text-sm font-medium text-gray-400">{step.num}</span>
              <h2 className="mt-3 text-xl font-light text-gray-900">{step.title}</h2>
              <div className="mt-4 text-base font-light text-gray-600 leading-relaxed">
                {step.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-gray-100 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg font-light text-gray-600">
            Хотите посмотреть мастерскую или образцы вживую — приезжайте, покажем и подскажем.
          </p>
          <Link
            href="/contacts"
            className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
          >
            Записаться на визит
          </Link>
        </div>
      </div>
    </main>
  );
}