import Image from "next/image";
import Link from "next/link";
import { facades } from "@/data/facades";

const categories = [
  {
    number: "01",
    title: "Фрезерованные фасады",
    text: "Декоративные рисунки и выразительные профили для индивидуальной мебели.",
    href: "/catalog/milled",
    image: facades.find((item) => item.category === "milled")?.image ?? "/images/catalog1/image1.jpg",
    size: "large",
  },
  {
    number: "02",
    title: "Интегрированные ручки",
    text: "Минималистичные решения без накладной фурнитуры.",
    href: "/catalog/handles",
    image: facades.find((item) => item.category === "handles")?.image ?? "/images/handles/gola.jpg",
    size: "small",
  },
  {
    number: "03",
    title: "Профили края",
    text: "Детали, которые завершают внешний вид фасада.",
    href: "/catalog/edge",
    image: facades.find((item) => item.category === "edge")?.image ?? "/images/profil_kraya.jpg",
    size: "small",
  },
  {
    number: "04",
    title: "Реализованные проекты",
    text: "Примеры изделий и мебельных решений из нашего портфолио.",
    href: "/portfolio",
    image: facades.find((item) => item.category === "work_facades")?.image ?? "/images/catalog2/photo1/5195250767357484499.jpg",
    size: "large",
  },
];

const steps = [
  { number: "01", title: "Обсуждаем задачу", text: "Уточняем назначение деталей, размеры и желаемый внешний вид." },
  { number: "02", title: "Подбираем решение", text: "Согласовываем модель фасада, профиль и доступные варианты исполнения." },
  { number: "03", title: "Рассчитываем заказ", text: "Подготавливаем расчёт после получения необходимых параметров." },
  { number: "04", title: "Изготавливаем", text: "Согласовываем детали заказа и приступаем к работе." },
];

export default function Home() {
  const featuredFacades = facades.filter((item) => item.category === "milled").slice(0, 4);

  return (
    <main className="site-main">
      <section className="home-hero">
        <Image
          src="/images/hero/hero-main.jpg"
          alt="Мебельные фасады и детали из МДФ"
          fill
          priority
          sizes="100vw"
          className="home-hero__image"
        />
        <div className="home-hero__veil" />
        <div className="home-hero__content">
          <p className="eyebrow eyebrow--light">ИП НАУМОВИЧ · ПРОИЗВОДСТВО МДФ</p>
          <h1>Детали, из которых<br /><em>складывается интерьер.</em></h1>
          <p className="home-hero__description">
            Крашеные и шпонированные мебельные фасады, фрезеровка и детали по индивидуальным размерам.
          </p>
          <div className="home-hero__actions">
            <Link href="/catalog" className="button button--light">Перейти в каталог <span aria-hidden="true">↗</span></Link>
            <Link href="/contacts" className="text-link text-link--light">Обсудить проект <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="home-hero__note"><span className="hero-line" /> Собственная мастерская · Минск</div>
        </div>
        <div className="home-hero__index"><span>01</span><span className="hero-index-line" /><span>04</span></div>
      </section>

      <section className="intro-section section-shell">
        <div className="intro-section__label"><span className="section-number">01 /</span><span>О ПРОИЗВОДСТВЕ</span></div>
        <div className="intro-section__body">
          <h2>Форма. Материал.<br /><em>Точность в деталях.</em></h2>
          <div className="intro-section__copy">
            <p>Изготавливаем мебельные детали из МДФ для индивидуальных проектов. Помогаем подобрать профиль и исполнение, чтобы результат соответствовал вашей задумке.</p>
            <Link href="/about" className="text-link">Больше о компании <span aria-hidden="true">↗</span></Link>
          </div>
        </div>
        <div className="intro-stats">
          <div><strong>01</strong><span>Индивидуальный подход</span></div>
          <div><strong>02</strong><span>Выбор фрезеровок</span></div>
          <div><strong>03</strong><span>Подбор исполнения</span></div>
        </div>
      </section>

      <section className="catalog-section">
        <div className="section-shell">
          <div className="section-heading">
            <div><p className="eyebrow">КАТАЛОГ ПРОДУКЦИИ</p><h2>Найдите своё <em>решение.</em></h2></div>
            <Link href="/catalog" className="text-link section-heading__link">Весь каталог <span aria-hidden="true">↗</span></Link>
          </div>
          <div className="category-grid">
            {categories.map((category) => (
              <Link href={category.href} key={category.number} className={`category-card category-card--${category.size}`}>
                <div className="category-card__media">
                  <Image src={category.image} alt={category.title} fill sizes="(max-width: 700px) 100vw, 50vw" />
                  <span className="category-card__number">{category.number}</span>
                  <span className="category-card__arrow" aria-hidden="true">↗</span>
                </div>
                <div className="category-card__caption"><div><h3>{category.title}</h3><p>{category.text}</p></div><span className="category-card__more">Смотреть</span></div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="featured-section section-shell">
        <div className="section-heading">
          <div><p className="eyebrow">ВЫБОР ИЗ КАТАЛОГА</p><h2>Фрезеровки <em>МДФ.</em></h2></div>
          <p className="section-heading__description">Выберите форму, которая станет частью вашего проекта.</p>
        </div>
        <div className="featured-grid">
          {featuredFacades.map((facade, index) => (
            <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="featured-card">
              <div className="featured-card__media"><Image src={facade.image} alt={facade.name} fill sizes="(max-width: 640px) 50vw, 25vw" /><span>МОДЕЛЬ / {String(index + 1).padStart(2, "0")}</span></div>
              <div className="featured-card__title"><h3>{facade.name}</h3><span aria-hidden="true">↗</span></div>
              <p>{facade.description ?? "Фрезерованный фасад МДФ"}</p>
            </Link>
          ))}
        </div>
        <div className="center-action"><Link href="/catalog/milled" className="button button--outline">Все модели <span aria-hidden="true">↗</span></Link></div>
      </section>

      <section className="process-section">
        <div className="section-shell process-layout">
          <div className="process-intro"><p className="eyebrow eyebrow--light">ПОНЯТНЫЙ ПРОЦЕСС</p><h2>От идеи<br />до <em>детали.</em></h2><p>Расскажите, что хотите изготовить. Поможем сориентироваться по вариантам и подготовить данные для расчёта.</p><Link href="/production" className="text-link text-link--light">Как мы работаем <span aria-hidden="true">↗</span></Link></div>
          <div className="process-steps">{steps.map((step) => <div className="process-step" key={step.number}><span>{step.number}</span><div><h3>{step.title}</h3><p>{step.text}</p></div><span className="process-step__arrow" aria-hidden="true">↗</span></div>)}</div>
        </div>
      </section>

      <section className="contact-banner">
        <div className="section-shell contact-banner__inner"><div><p className="eyebrow">ЕСТЬ ИДЕЯ?</p><h2>Давайте обсудим<br /><em>ваш проект.</em></h2><p>Свяжитесь с нами, чтобы обсудить задачу и узнать, какие данные нужны для расчёта.</p></div><div className="contact-banner__actions"><a href="tel:+375259929001" className="button button--dark">+375 25 992-90-01 <span aria-hidden="true">↗</span></a><Link href="/contacts" className="text-link">Все контакты <span aria-hidden="true">↗</span></Link></div></div>
      </section>
    </main>
  );
}
