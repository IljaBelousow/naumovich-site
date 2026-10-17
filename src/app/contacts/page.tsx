import Link from "next/link";

export const metadata = { title: "Контакты — ИП Наумович", description: "Контакты производства ИП Наумович: телефоны, Telegram, Instagram и адрес." };

export default function ContactsPage() {
  return <main className="site-main contacts-page">
    <section className="page-shell contacts-intro"><p className="eyebrow">Контакты / Связаться</p><h1>Давайте обсудим<br /><em>ваш проект.</em></h1><p>Расскажите, что хотите изготовить. Обсудим параметры, варианты отделки и следующие шаги.</p></section>
    <section className="page-shell contacts-layout">
      <div className="contacts-primary"><p className="eyebrow eyebrow--light">Позвонить</p><a className="contacts-primary__phone" href="tel:+375259929001">+375 25 992-90-01</a><p>Основной номер для связи</p><a className="contacts-primary__phone contacts-primary__phone--secondary" href="tel:+375447744449">+375 44 774-44-49</a><div className="contacts-actions"><a href="https://t.me/+375259929001" target="_blank" rel="noopener noreferrer">Telegram ↗</a><a href="https://www.instagram.com/vintazh100" target="_blank" rel="noopener noreferrer">Instagram ↗</a><a href="viber://chat?number=%2B375259929001">Viber ↗</a></div></div>
      <div className="contacts-details"><article><span>Адрес</span><p>Меньковский тракт 21<br />Щомыслицкий сельсовет</p></article><article><span>Электронная почта</span><a href="mailto:info@naumovich.by">info@naumovich.by</a></article><article><span>Учетные данные</span><p>ИП Наумович · УНП 193843566</p></article><article><span>Что подготовить к обсуждению</span><p>Примерные размеры, фото мебели или интерьера, желаемый цвет и описание задачи.</p></article></div>
    </section>
    <section className="contacts-bottom"><div className="page-shell contacts-bottom__inner"><div><p className="eyebrow eyebrow--light">Следующий шаг</p><h2>Посмотрите варианты<br /><em>перед обсуждением.</em></h2></div><Link href="/catalog" className="button button--gold">Открыть каталог <span>↗</span></Link></div></section>
  </main>;
}