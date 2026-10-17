import Link from "next/link";
import { millings } from "@/data/millings";

export const metadata = { title: "Фрезеровки фасадов МДФ — ИП Наумович", description: "Варианты фрезеровки МДФ для фасадов и декоративных деталей. Изготовление по согласованному проекту." };

export default function FrezerovkiPage() {
  return <main className="site-main">
    <section className="catalog-hero page-hero--milling"><div className="catalog-hero__image milling-hero-texture" /><div className="catalog-hero__overlay" /><div className="page-shell catalog-hero__content"><p className="eyebrow eyebrow--light"><span /> Форма и рельеф</p><h1>Рисунок, который<br /><em>задаёт характер.</em></h1><p>Фрезеровка помогает создать узнаваемый ритм фасада и декоративной детали — от лаконичных линий до классических рамок.</p></div></section>
    <section className="page-shell section-space"><div className="section-heading"><div><p className="eyebrow">Коллекция фрезеровок</p><h2>Выберите рисунок</h2></div><p>Откройте подходящий вариант и обсудите размеры, материал и отделку под свой проект.</p></div><div className="milling-grid">{millings.map((item,index)=><article key={item.slug} className="milling-card"><div className="milling-card__image"><div className="milling-pattern" style={item.pattern} /><span>{String(index+1).padStart(2,"0")}</span></div><h3>{item.name}</h3><p>{item.description}</p></article>)}</div></section>
    <section className="catalog-bottom-cta"><div className="page-shell catalog-bottom-cta__inner"><div><p className="eyebrow eyebrow--light">Нужен свой рисунок?</p><h2>Обсудим фрезеровку<br /><em>под вашу идею.</em></h2></div><Link href="/contacts" className="button button--gold">Обсудить заказ <span>↗</span></Link></div></section>
  </main>;
}