export const metadata = {
  title: "О компании — ИП Наумович",
  description:
    "ИП Наумович — производство крашеных фасадов МДФ в Минске. Работаем с частными клиентами и мебельными производствами.",
};

const stats = [
  { value: "10+", label: "лет производим фасады" },
  { value: "12 000+", label: "фасадов изготовлено" },
  { value: "213", label: "цвета RAL в палитре" },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          О компании
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extralight leading-tight tracking-tight text-gray-900 sm:text-5xl">
          ИП Наумович — производство крашеных фасадов МДФ
        </h1>

        <div className="mt-10 max-w-2xl space-y-6 text-lg font-light text-gray-600">
          <p>
            Мы делаем фасады, которые становятся лицом кухни, шкафа или
            гардеробной. Работаем с частными клиентами и мебельными
            производствами.
          </p>
          <p>
            Собственный цех и станки с ЧПУ позволяют выполнять заказ в любом
            размере, с любой фрезеровкой и в любом цвете RAL — без посредников
            и переплат.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-gray-100 pt-12 sm:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extralight text-gray-900 sm:text-5xl">{stat.value}</p>
              <p className="mt-2 text-base font-light text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}