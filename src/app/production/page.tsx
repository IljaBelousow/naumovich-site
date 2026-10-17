import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Производство — ИП Наумович", description: "Как создаются фасады МДФ и мебельные элементы: обработка, подготовка, отделка и контроль." };
const steps = [
  ["01", "Задача и параметры", "Определяем назначение детали, размеры, рисунок и желаемый результат."],
  ["02", "Обработка материала", "Подготавливаем заготовку и выполняем фрезеровку по согласованной форме."],
  ["03", "Подготовка поверхности", "Шлифуем и подготавливаем деталь к нанесению финишного покрытия."],
  ["04", "Отделка и проверка", "Согласуем цвет и покрытие, проверяем готовую деталь перед передачей заказа."],
];

export default function ProductionPage() {
  return <main className="site-main">
    <section className="catalog-hero page-hero--production"><Image src="/images/catalog2/photo3/5195250767357484492.jpg" alt="Производство и обработка мебельных деталей" fill priority sizes="100vw" className="catalog-hero__image" /><div className="catalog-hero__overlay" /><div className="page-shell catalog-hero__content"><p className="eyebrow eyebrow--light"><span /> Производство</p><h1>От точной формы<br /><em>до чистой отделки.</em></h1><p>Каждый этап влияет на то, как фасад или мебельная деталь будет выглядеть и работать в готовом интерьере.</p></div></section>
    <section className="page-shell section-space"><div className="section-heading"><div><p className="eyebrow">Как мы работаем</p><h2>Путь каждой детали</h2></div><p>Сначала согласуем решение, затем последовательно движемся к изготовлению.</p></div><div className="production-steps">{steps.map(([n,t,d])=><article key={n}><span>{n}</span><div><h3>{t}</h3><p>{d}</p></div><b>↗</b></article>)}</div></section>
    <section className="production-feature"><div className="page-shell production-feature__inner"><div><p className="eyebrow eyebrow--light">Цвет и фактура</p><h2>Финишная поверхность меняет всё.</h2><p>Матовый или глянцевый эффект, спокойный нейтральный оттенок или выразительный цвет — подбираем исполнение под общий замысел проекта.</p><Link href="/contacts" className="button button--gold">Обсудить отделку <span>↗</span></Link></div><div className="production-feature__photo"><Image src="/images/catalog1/image7.jpg" alt="Фактура фрезерованной детали МДФ" fill sizes="(max-width: 900px) 100vw, 40vw" className="object-contain" /></div></div></section>
  </main>;
}