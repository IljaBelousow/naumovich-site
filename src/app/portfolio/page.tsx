export const metadata = {
  title: "Портфолио — ИП Наумович",
  description:
    "Кухни, шкафы и гардеробные с крашеными фасадами МДФ производства ИП Наумович.",
};

const works = [
  { title: "Кухня", facade: "Милан", note: "Эмаль, матовая" },
  { title: "Кухня", facade: "Прага", note: "Эмаль, глянец" },
  { title: "Шкаф-купе", facade: "Венеция", note: "Эмаль с патиной" },
  { title: "Кухня", facade: "Неаполь", note: "Эмаль, матовая" },
  { title: "Гардеробная", facade: "Турин", note: "Эмаль, матовая" },
  { title: "Кухонный остров", facade: "Верона", note: "Эмаль, глянец" },
];

export default function PortfolioPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          Наши работы
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-5xl">
          Портфолио
        </h1>
        <p className="mt-6 max-w-2xl text-lg font-light text-gray-600">
          Мебель с нашими фасадами в реальных интерьерах. Каждая работа —
          фасад, изготовленный под заказ на нашем производстве.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2">
          {works.map((work, i) => (
            <figure key={i} className="group">
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100">
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
                    Фото скоро
                  </span>
                </div>
              </div>
              <figcaption className="mt-4 flex items-baseline justify-between">
                <span className="text-lg font-light text-gray-900">
                  {work.title} — {work.facade}
                </span>
                <span className="hidden text-sm font-light text-gray-500 sm:block">
                  {work.note}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </main>
  );
}