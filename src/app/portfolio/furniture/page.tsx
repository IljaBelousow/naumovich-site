import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = { title: "Мебель и интерьер — портфолио | ИП Наумович" };

export default function PortfolioFurniturePage() {
  const items = facades.filter((f) => f.category === "work_furniture");
  return <main className="site-main">
    <section className="catalog-hero page-hero--portfolio"><Image src="/images/catalog2/photo1/5195250767357484499.jpg" alt="Мебельный проект" fill priority sizes="100vw" className="catalog-hero__image" /><div className="catalog-hero__overlay" /><div className="page-shell catalog-hero__content"><Link href="/portfolio" className="eyebrow eyebrow--light"><span /> Портфолио / Все работы</Link><h1>Мебель и<br /><em>интерьерные решения.</em></h1><p>Фасады и детали как часть цельного пространства — с учётом формы, цвета и назначения мебели.</p></div></section>
    <section className="page-shell section-space"><div className="section-heading"><div><p className="eyebrow">Примеры проектов</p><h2>Мебель и интерьер</h2></div><p>Используйте фотографии как отправную точку для обсуждения собственного проекта.</p></div>{items.length ? <div className="portfolio-grid">{items.map((item,index)=><Link key={item.slug} href={`/portfolio/${item.slug}`} className="portfolio-card"><div className="portfolio-card__image"><Image src={item.image} alt={item.name} fill sizes="(max-width:650px) 50vw,25vw" className="object-cover" /><span>ПРОЕКТ / {String(index+1).padStart(2,"0")}</span></div><h3>{item.name}</h3><p>{item.description || "Индивидуальный мебельный проект"}</p></Link>)}</div> : <div className="portfolio-empty"><p>Подборка мебельных проектов обновляется. Расскажите, какая задача стоит перед вами, и мы обсудим возможные решения.</p><Link href="/contacts" className="text-link">Обсудить свой проект <span>↗</span></Link></div>}</section>
  </main>;
}