import Link from "next/link";
import Image from "next/image";
import { facades } from "@/data/facades";

const activities = [
  {
    number: "01",
    title: "Крашеные фасады МДФ",
    text: "Для кухонь, шкафов, ванных комнат, гардеробных и коммерческих интерьеров.",
    image: "/images/catalog1/image1.jpg",
    href: "/catalog#milled",
    className: "activity-card--large",
  },
  {
    number: "02",
    title: "Мебель на заказ",
    text: "Фасады и детали для индивидуальных мебельных проектов.",
    image: "/images/catalog2/photo1/5195250767357484499.jpg",
    href: "/portfolio",
    className: "",
  },
  {
    number: "03",
    title: "Фрезерованные фасады",
    text: "Рельеф, геометрия и выразительные детали из МДФ.",
    image: "/images/catalog1/image7.jpg",
    href: "/frezerovki",
    className: "",
  },
  {
    number: "04",
    title: "Декоративные элементы",
    text: "Профили, интегрированные ручки и элементы под ваш проект.",
    image: "/images/profil_kraya.jpg",
    href: "/catalog#handles",
    className: "",
  },
];

export default function Home() {
  const featuredFacades = facades.filter((facade) => facade.category === "milled").slice(0, 4);

  return (
    <main className="site-main">
      <section className="hero-premium">
        <Image src="/images/hero/hero-main.jpg" alt="Фасады МДФ и детали современного интерьера" fill priority sizes="100vw" className="hero-premium__image" />
        <div className="hero-premium__veil" />
        <div className="hero-premium__grain" />
        <div className="hero-premium__content page-shell">
          <p className="eyebrow eyebrow--light"><span /> Производство интерьерных решений · Минск</p>
          <h1>Изготовление мебели<br /><em>и крашеных фасадов МДФ.</em></h1>
          <p className="hero-premium__lead">Производим крашеные фасады МДФ, мебель и декоративные элементы по вашим размерам. Подбираем фрезеровку, цвет и отделку под конкретный интерьер.</p>
          <div className="hero-premium__actions">
            <Link href="/catalog" className="button button--gold">Открыть каталог <span>↗</span></Link>
            <Link href="/contacts" className="button button--ghost">Обсудить проект <span>↗</span></Link>
          </div>
          <div className="hero-premium__meta">
            <span>Индивидуальные размеры</span><span>Подбор цвета и отделки</span><span>Внимание к деталям</span>
          </div>
        </div>
        <div className="hero-premium__index"><span>01</span> / Производство и дизайн</div>
      </section>

      <section className="intro-section page-shell section-space">
        <div className="intro-section__label"><span className="eyebrow">О производстве</span><span className="intro-section__line" /></div>
        <div className="intro-section__body">
          <h2>Фасады, мебель и детали.<br /><em>В едином стиле.</em></h2>
          <div>
            <p>Изготавливаем крашеные фасады МДФ и мебельные элементы для кухонь, шкафов, гардеробных и других интерьеров. От выбора модели до согласования цвета и исполнения.</p>
            <Link href="/about" className="text-link">Узнать о нашем подходе <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="activities-section">
        <div className="page-shell section-space">
          <div className="section-heading">
            <div><p className="eyebrow">Что мы создаём / 01—04</p><h2>Направления работы</h2></div>
            <p>Крашеные гладкие и фрезерованные фасады, мебельные решения и детали для производителей мебели, дизайнеров и частных клиентов.</p>
          </div>
          <div className="activity-grid">
            {activities.map((activity) => (
              <Link key={activity.number} href={activity.href} className={`activity-card ${activity.className}`}>
                <Image src={activity.image} alt={activity.title} fill sizes="(max-width: 760px) 100vw, 50vw" className="activity-card__image" />
                <div className="activity-card__shade" />
                <span className="activity-card__number">{activity.number}</span>
                <div className="activity-card__copy">
                  <h3>{activity.title}</h3><p>{activity.text}</p>
                  <span className="activity-card__arrow">↗</span>
                </div>
              </Link>
            ))}
          </div>
          <div className="section-footnote"><span>01 / 04</span><span>Выберите направление, чтобы изучить модели и варианты исполнения</span></div>
        </div>
      </section>

      <section className="models-section page-shell section-space">
        <div className="section-heading">
          <div><p className="eyebrow">Подборка мастерской</p><h2>Каталог фасадов МДФ</h2></div>
          <Link href="/catalog#milled" className="text-link">Все модели <span>↗</span></Link>
        </div>
        <div className="model-grid">
          {featuredFacades.map((facade, index) => (
            <Link key={facade.slug} href={`/catalog/${facade.slug}`} className="model-card">
              <div className="model-card__visual">
                <Image src={facade.image} alt={facade.name} fill sizes="(max-width: 700px) 50vw, 25vw" className="model-card__image" />
                <span className="model-card__index">0{index + 1}</span><span className="model-card__go">↗</span>
              </div>
              <div className="model-card__caption"><h3>{facade.name}</h3><p>{facade.description || "Фасад МДФ под индивидуальный заказ"}</p></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="craft-section">
        <div className="craft-section__image">
          <Image src="/images/catalog2/photo3/5195250767357484492.jpg" alt="Детали мебельного проекта" fill sizes="(max-width: 900px) 100vw, 50vw" className="object-cover" />
        </div>
        <div className="craft-section__copy">
          <p className="eyebrow eyebrow--light">Точность в каждой детали</p>
          <h2>Ваша идея — наша точность.</h2>
          <p>Изготавливаем фасады и мебель по индивидуальным параметрам. Помогаем выбрать профиль, цвет и финишное покрытие с учётом назначения изделия.</p>
          <Link href="/production" className="button button--outline-light">Как устроен процесс <span>↗</span></Link>
          <div className="craft-section__stamp">Форма<br />Материал<br />Отделка</div>
        </div>
      </section>

      <section className="process-section page-shell section-space">
        <div className="section-heading">
          <div><p className="eyebrow">От запроса к результату</p><h2>Понятный процесс</h2></div>
          <p>Без лишних сложностей: вместе определяем задачу и подбираем исполнение.</p>
        </div>
        <div className="process-grid">
          {[
            ["01", "Обсуждаем задачу", "Размеры, назначение, референсы и желаемый результат."],
            ["02", "Подбираем решение", "Форма, фрезеровка, цвет и подходящая отделка."],
            ["03", "Согласуем детали", "Уточняем параметры и состав заказа до изготовления."],
            ["04", "Изготавливаем", "Передаём заказ, уделяя внимание точности исполнения."],
          ].map(([n, title, text]) => <article key={n} className="process-step"><span>{n}</span><h3>{title}</h3><p>{text}</p></article>)}
        </div>
      </section>

      <section className="closing-cta">
        <div className="closing-cta__texture" />
        <div className="page-shell closing-cta__inner">
          <p className="eyebrow eyebrow--light">Ваш проект начинается с разговора</p>
          <h2>Нужны фасады или мебель?<br /><em>Обсудим ваш проект.</em></h2>
          <div className="closing-cta__bottom"><p>Отправьте размеры, эскиз или пример понравившегося изделия — обсудим подходящий вариант изготовления.</p><Link href="/contacts" className="button button--gold">Связаться с нами <span>↗</span></Link></div>
        </div>
      </section>
    </main>
  );
}