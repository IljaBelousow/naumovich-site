import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = { title: "Фасады и детали — портфолио | ИП Наумович" };

export default function PortfolioFacadesPage() {
  const items = facades.filter((f) => f.category === "work_facades");
  return <main className="site-main">
    <section className="catalog-hero page-hero--portfolio"><Image src="/images/catalog2/photo2/5195250767357484496.jpg" alt="Фасады МДФ в интерьере" fill priority sizes="100vw" className="catalog-hero__image" /><div className="catalog-hero__overlay" /><div className="page-shell catalog-hero__content"><Link href="/portfolio" className="eyebrow eyebrow--light"><span /> Портфолио / Все работы</Link><h1>Форма, цвет<br /><em>и точность деталей.</em></h1><p>Примеры фасадов МДФ и фрезеровки. Посмотрите на форму и отделку, а затем обсудим параметры вашего проекта.</p></div></section>
    <section className="page-shell section-space"><div className="section-heading"><div><p className="eyebrow">Примеры проектов</p><h2>Фасады и детали</h2></div><p>Фасады применяются не только в кухнях: они подходят для шкафов, гардеробных, тумб и других интерьерных решений.</p></div><div className="portfolio-grid">{items.map((item,index)=><Link key={item.slug} href={`/portfolio/${item.slug}`} className="portfolio-card"><div className="portfolio-card__image"><Image src={item.image} alt={item.name} fill sizes="(max-width:650px) 50vw,25vw" className="object-cover" /><span>ПРОЕКТ / {String(index+1).padStart(2,"0")}</span></div><h3>{item.name}</h3><p>{item.description || "Фасад МДФ под заказ"}</p></Link>)}</div></section>
  </main>;
}