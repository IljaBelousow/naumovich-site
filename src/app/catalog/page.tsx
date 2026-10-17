import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

export const metadata = {
  title: "Каталог — фасады МДФ, мебельные детали и интерьерные решения | ИП Наумович",
  description: "Каталог направлений производства: фасады МДФ для кухонь, шкафов и интерьеров, фрезеровка, мебельные детали и профили.",
};

const directions = [
  { id: "facades", number: "01", title: "Крашеные фасады МДФ", description: "Для кухонь, шкафов, ванных комнат, гардеробных и коммерческих интерьеров.", image: "/images/catalog1/image1.jpg", href: "#milled", tall: true },
  { id: "furniture", number: "02", title: "Мебель на заказ", description: "Фасады и детали для индивидуальных мебельных проектов и обновления готовой мебели.", image: "/images/catalog2/photo1/5195250767357484499.jpg", href: "/portfolio", tall: false },
  { id: "milling", number: "03", title: "Фрезерованные фасады", description: "Рисунок, рельеф и декоративные элементы, которые задают характер поверхности.", image: "/images/catalog1/image7.jpg", href: "/frezerovki", tall: false },
  { id: "parts", number: "04", title: "Декоративные элементы", description: "Интегрированные ручки, профили края и другие элементы под ваш проект.", image: "/images/profil_kraya.jpg", href: "#handles", tall: false },
];

export default function CatalogPage() {
  const milled = facades.filter((item) => item.category === "milled");
  const handles = facades.filter((item) => item.category === "handles");
  const edge = facades.filter((item) => item.category === "edge");

  return (
    <main className="site-main catalog-page">
      <section className="catalog-hero">
        <Image src="/images/hero/hero-main.jpg" alt="Интерьерные решения и фасады МДФ" fill priority sizes="100vw" className="catalog-hero__image" />
        <div className="catalog-hero__overlay" />
        <div className="page-shell catalog-hero__content">
          <p className="eyebrow eyebrow--light"><span /> Каталог производства</p>
          <h1>Крашеные фасады МДФ<br /><em>и мебель на заказ.</em></h1>
          <p>Выберите тип изделия и изучите модели фасадов, варианты фрезеровки и мебельные решения.</p>
          <div className="catalog-hero__links"><a href="#directions">Направления <span>↓</span></a><a href="#milled">Все модели фасадов <span>↗</span></a></div>
        </div>
      </section>

      <section id="directions" className="page-shell section-space catalog-directions">
        <div className="section-heading"><div><p className="eyebrow">Области применения</p><h2>Каталог продукции</h2></div><p>Фасады и детали для разных задач — от мебели в доме до выразительных элементов интерьера.</p></div>
        <div className="direction-grid">
          {directions.map((item) => (
            <Link key={item.id} href={item.href} className={`direction-card ${item.tall ? "direction-card--tall" : ""}`}>
              <Image src={item.image} alt={item.title} fill sizes="(max-width: 720px) 100vw, 50vw" className="direction-card__image" />
              <div className="direction-card__shade" />
              <span className="direction-card__number">{item.number} / НАПРАВЛЕНИЕ</span>
              <div className="direction-card__content"><h2>{item.title}</h2><p>{item.description}</p><span className="direction-card__arrow">↗</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section id="milled" className="catalog-models">
        <div className="page-shell section-space">
          <div className="section-heading"><div><p className="eyebrow">Коллекция / 01</p><h2>Фрезерованные фасады МДФ</h2></div><p>Подходят для кухонь, шкафов, тумб, ванных комнат и других мебельных решений. Выберите модель и обсудите размеры, цвет и отделку.</p></div>
          <div className="catalog-model-grid">
            {milled.map((item, index) => (
              <Link key={item.slug} href={`/catalog/${item.slug}`} className="catalog-model-card">
                <div className="catalog-model-card__image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 600px) 50vw, (max-width: 1000px) 33vw, 25vw" className="object-contain" /><span>{String(index + 1).padStart(2, "0")}</span><i>↗</i></div>
                <div className="catalog-model-card__text"><h3>{item.name}</h3><p>{item.description || "Фасад МДФ под индивидуальный заказ"}</p><span>Подробнее о модели <b>→</b></span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section id="handles" className="page-shell section-space catalog-secondary">
        <div className="section-heading"><div><p className="eyebrow">Коллекция / 02</p><h2>Детали и профили</h2></div><p>Функциональные элементы дополняют фасад и помогают добиться цельного внешнего вида.</p></div>
        <div className="catalog-secondary__grid">
          {[...handles, ...edge].map((item) => (
            <Link key={item.slug} href={`/catalog/${item.slug}`} className="secondary-card">
              <div className="secondary-card__image"><Image src={item.image} alt={item.name} fill sizes="(max-width: 650px) 100vw, 35vw" className="object-contain" /></div>
              <div><p className="eyebrow">Мебельные компоненты</p><h3>{item.name}</h3><p className="secondary-card__description">{item.description || "Деталь для индивидуального проекта"}</p><span className="text-link">Смотреть <b>↗</b></span></div>
            </Link>
          ))}
          <div className="catalog-note"><span>Индивидуальный подход</span><h3>Не нашли подходящий вариант?</h3><p>Расскажите о задаче — обсудим форму, размеры и отделку под ваш проект.</p><Link href="/contacts" className="button button--dark">Обсудить заказ <span>↗</span></Link></div>
        </div>
      </section>
      <section className="catalog-bottom-cta"><div className="page-shell catalog-bottom-cta__inner"><div><p className="eyebrow eyebrow--light">Индивидуальное изготовление</p><h2>Есть проект — найдём<br /><em>подходящее решение.</em></h2></div><Link href="/contacts" className="button button--gold">Связаться с нами <span>↗</span></Link></div></section>
    </main>
  );
}