import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "О компании — ИП Наумович", description: "Изготовление мебельных деталей из МДФ, крашеных фасадов и интерьерных элементов на заказ." };

const values = [
  ["01", "Собственная мастерская", "Контролируем обработку и отделку, уделяя внимание каждой детали."],
  ["02", "Решения под задачу", "Учитываем размеры, назначение элемента и архитектуру интерьера."],
  ["03", "Цвет и поверхность", "Помогаем подобрать оттенок, фрезеровку и подходящий тип покрытия."],
];

export default function AboutPage() {
  return <main className="site-main">
    <section className="catalog-hero page-hero--about">
      <Image src="/images/hero/hero-main.jpg" alt="Детали и поверхности в современном интерьере" fill priority sizes="100vw" className="catalog-hero__image" />
      <div className="catalog-hero__overlay" />
      <div className="page-shell catalog-hero__content"><p className="eyebrow eyebrow--light"><span /> О компании</p><h1>Точность в деталях.<br /><em>Цельность в результате.</em></h1><p>Изготавливаем фасады МДФ и мебельные элементы, которые помогают собрать интерьер в единую композицию.</p></div>
    </section>
    <section className="page-shell section-space about-intro"><div><p className="eyebrow">Наш подход</p><h2>Думаем не только о детали, но и о том, как она будет жить в интерьере.</h2></div><div><p>Один и тот же фасад может выглядеть по-разному в зависимости от света, цвета, профиля и окружения. Поэтому мы помогаем оценивать сочетание параметров, а не выбирать только по фотографии.</p><p>Работаем с фасадами, фрезеровкой и мебельными компонентами для кухонь, шкафов, ванных комнат и других интерьерных решений.</p><Link href="/catalog" className="text-link">Изучить направления <span>↗</span></Link></div></section>
    <section className="about-values"><div className="page-shell section-space"><div className="section-heading"><div><p className="eyebrow">Принципы работы</p><h2>Продуманное исполнение</h2></div><p>Практичность, аккуратность и уважение к замыслу проекта.</p></div><div className="about-values__grid">{values.map(([n,t,d])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{d}</p></article>)}</div></div></section>
    <section className="craft-section"><div className="craft-section__image"><Image src="/images/catalog2/photo2/5195250767357484496.jpg" alt="Фасад в реализованном интерьерном проекте" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" /></div><div className="craft-section__copy"><p className="eyebrow eyebrow--light">Индивидуальный подход</p><h2>Ваш проект — отправная точка.</h2><p>Обсудим назначение деталей, размеры, цвет и отделку. Подберём направление, которое будет уместно именно в вашем пространстве.</p><Link href="/contacts" className="button button--gold">Обсудить проект <span>↗</span></Link></div></section>
  </main>;
}