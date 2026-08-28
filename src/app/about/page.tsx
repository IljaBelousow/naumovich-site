import Link from "next/link";

export const metadata = {
  title: "О компании — ИП Наумович",
  description:
    "ИП Наумович — изготовление мебельных деталей из МДФ крашеных и шпонированных, мебель на заказ по индивидуальным параметрам.",
};

const principles = [
  {
    title: "Собственная мастерская",
    text: "Не перепродаём — изготавливаем сами. От раскроя плиты до упаковки готовой детали.",
  },
  {
    title: "Под заказ",
    text: "Каждая деталь изготавливается под конкретный проект: любой размер, любая форма.",
  },
  {
    title: "Честные сроки",
    text: "Называем реальный срок и держим его. Без «где-то через месяц».",
  },
];

export default function AboutPage() {
  return (
    <main className="w-full bg-white">
      <div className="w-full px-5 py-16 sm:px-8 sm:py-24 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          О компании
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extralight leading-tight tracking-tight text-gray-900 sm:text-5xl">
          ИП Наумович — мебельные детали из МДФ под заказ
        </h1>
        <p className="mt-8 max-w-2xl text-lg font-light text-gray-600">
          Мы изготавливаем мебельные детали из МДФ — крашеные и
          шпонированные. А также мебель на заказ по индивидуальным
          параметрам. Работаем и с частными клиентами, и с мебельщиками.
        </p>
        <p className="mt-6 max-w-2xl text-lg font-light text-gray-600">
          Если у вас стоит мебель, которая ещё в порядке, — можно заменить
          только фасады (дверцы). Это быстрее и дешевле, чем покупать новую
          мебель.
        </p>

        <div className="mt-14 grid grid-cols-1 gap-10 sm:grid-cols-3">
          {principles.map((p) => (
            <div key={p.title} className="border-t border-gray-200 pt-6">
              <h2 className="text-xl font-light text-gray-900">{p.title}</h2>
              <p className="mt-3 text-base font-light text-gray-600">{p.text}</p>
            </div>
          ))}
        </div>

        {/* Технология покраски */}
        <div className="mt-20 border-t border-gray-100 pt-12">
          <h2 className="text-2xl font-light text-gray-900 mb-8">
            Технология покраски
          </h2>
          
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-light text-gray-900 mb-3">
                Подбор цвета
              </h3>
              <p className="text-base font-light text-gray-600">
                Работаем с системами подбора цвета: <strong>RAL, WCP, NCS, Caparol</strong>
              </p>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-3">
                Подготовка поверхности (грунтование)
              </h3>
              <p className="text-base font-light text-gray-600 mb-4">
                Используем двухслойную систему грунтования для идеального результата:
              </p>
              
              <div className="space-y-4 pl-4">
                <div>
                  <p className="font-medium text-gray-900">1-й этап — грунт-изолятор:</p>
                  <ul className="mt-2 space-y-2 text-sm font-light text-gray-600 list-disc list-inside">
                    <li>Формирует тонкую эластичную плёнку</li>
                    <li>Снижает впитываемость пористых участков</li>
                    <li>Предотвращает поднятие ворса</li>
                    <li>Создаёт барьер от миграции смол и танинов</li>
                  </ul>
                </div>

                <div>
                  <p className="font-medium text-gray-900">2-й этап — наполняющий грунт:</p>
                  <ul className="mt-2 space-y-2 text-sm font-light text-gray-600 list-disc list-inside">
                    <li>Выравнивает микронеровности поверхности</li>
                    <li>Заполняет поры МДФ</li>
                    <li>Создаёт укрывистую основу под финишную эмаль</li>
                    <li>Может быть полиуретановым или полиэфирным (в зависимости от задачи)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-light text-gray-900 mb-3">
                Финишное покрытие
              </h3>
              <p className="text-base font-light text-gray-600">
                После грунтования наносится финишная эмаль выбранного цвета. 
                Возможно изготовление как глянцевых, так и матовых фасадов.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 border-t border-gray-100 pt-12 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl text-lg font-light text-gray-600">
            Остались вопросы — позвоните, всё расскажем и посчитаем стоимость.
          </p>
          <Link
            href="/contacts"
            className="inline-block border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
          >
            Связаться
          </Link>
        </div>
      </div>
    </main>
  );
}