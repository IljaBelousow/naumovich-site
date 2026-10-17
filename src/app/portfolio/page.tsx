import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = { title: "Портфолио — мебельные фасады и интерьерные проекты | ИП Наумович", description: "Примеры фасадов МДФ и мебельных деталей в реализованных проектах." };
const sections = [
  { id: "work_facades", title: "Фасады и детали", href: "/portfolio/facades", description: "Форма, фрезеровка и отделка в деталях." },
  { id: "work_furniture", title: "Мебель и интерьер", href: "/portfolio/furniture", description: "Фасады и детали в составе готовых решений." },
];

export default function PortfolioPage() {
  return <main className="site-main">
    <section className="catalog-hero page-hero--portfolio"><Image src="/images/catalog2/photo4/5195250767357484510.jpg" alt="Пример фасадов и мебели в интерьере" fill priority sizes="100vw" className="catalog-hero__image" /><div className="catalog-hero__overlay" /><div className="page-shell catalog-hero__content"><p className="eyebrow eyebrow--light"><span /> Портфолио</p><h1>Реальные детали.<br /><em>Реальные пространства.</em></h1><p>Посмотрите, как фасады, фрезеровка и мебельные элементы работают вместе в готовых проектах.</p></div></section>
    <div className="page-shell section-space">{sections.map((section, i) => { const items = facades.filter(f => f.category === section.id); return <section key={section.id} className="portfolio-section"><div className="section-heading"><div><p className="eyebrow">Раздел / 0{i+1}</p><h2>{section.title}</h2><p className="portfolio-section__description">{section.description}</p></div><Link href={section.href} className="text-link">Все проекты <span>↗</span></Link></div>{items.length ? <div className="portfolio-grid">{items.slice(0,8).map((item,index)=><Link key={item.slug} href={`/portfolio/${item.slug}`} className="portfolio-card"><div className="portfolio-card__image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 650px) 50vw, 25vw" className="object-cover" /><span>ПРОЕКТ / {String(index+1).padStart(2,"0")}</span></div><h3>{item.name}</h3><p>{item.description || "Индивидуальное изготовление в мастерской ИП Наумович"}</p></Link>)}</div> : <div className="portfolio-empty"><p>Примеры проектов в этом разделе уточняются.</p><Link href="/contacts" className="text-link">Запросить информацию <span>↗</span></Link></div>}</section>; })}</div>
    <section className="catalog-bottom-cta"><div className="page-shell catalog-bottom-cta__inner"><div><p className="eyebrow eyebrow--light">Ваш проект</p><h2>Покажите идею —<br /><em>обсудим исполнение.</em></h2></div><Link href="/contacts" className="button button--gold">Связаться <span>↗</span></Link></div></section>
  </main>;
}