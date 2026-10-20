import Link from "next/link";
import Image from "next/image";

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
    <main className="w-full bg-[#F1EEE7]">
      <section className="relative isolate flex min-h-[420px] items-end overflow-hidden bg-[#202322] text-white sm:min-h-[500px]">
        <Image src="/images/hero/hero-main.jpg" alt="Производство фасадов из МДФ" fill priority sizes="100vw" className="object-cover object-center opacity-45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#141716]/85 via-[#141716]/45 to-[#141716]/20" />
        <div className="relative mx-auto w-full max-w-[1500px] px-6 pb-12 pt-32 sm:px-12 sm:pb-16 lg:px-20">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.32em] text-[#E16A3A]">Как мы работаем · ИП Наумович</p>
          <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Как мы делаем фасады</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-white/80 sm:text-lg">Полный цикл в собственной мастерской — от фрезеровки до финишной покраски.</p>
        </div>
      </section>
      <div className="w-full px-5 py-12 sm:px-8 sm:py-16 lg:px-12 xl:px-16">

        <div className="mt-20 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.num} className="border-t border-[#D8D0C3] pt-6">
              <span className="text-sm font-medium text-[#82745F]">{step.num}</span>
              <h2 className="mt-3 text-xl font-normal text-gray-900">{step.title}</h2>
              <div className="mt-4 text-base font-normal text-gray-600 leading-relaxed">
                {step.text}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-[#D8D0C3] pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg font-normal text-gray-600">
            Хотите посмотреть мастерскую или образцы вживую — приезжайте, покажем и подскажем.
          </p>
          <Link
            href="/contacts"
            className="site-button"
          >
            Записаться на визит
          </Link>
        </div>
      </div>
    </main>
  );
}