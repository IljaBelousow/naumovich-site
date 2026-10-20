import Link from "next/link";

export const metadata = {
  title: "Политика конфиденциальности — ИП Наумович",
  description: "Информация об обработке персональных данных при использовании сайта ИП Наумович.",
};

export default function PrivacyPage() {
  return (
    <main className="min-h-[65vh] bg-[#F1EEE7] px-5 py-16 text-[#202322] sm:px-8 sm:py-20 lg:px-12">
      <article className="mx-auto max-w-4xl">
        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.25em] text-[#C65D32]">ИП Наумович</p>
        <h1 className="text-3xl font-semibold tracking-tight sm:text-5xl">Политика конфиденциальности</h1>
        <p className="mt-5 text-sm text-[#74766F]">Дата обновления: 20 октября 2026 года</p>

        <div className="mt-10 space-y-8 text-base leading-8 text-[#555750]">
          <section>
            <h2 className="text-lg font-semibold text-[#202322]">1. Общие положения</h2>
            <p className="mt-2">Настоящая политика описывает общие принципы обработки информации при посещении сайта ИП Наумович, посвящённого изготовлению фасадов из МДФ и мебели на заказ.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[#202322]">2. Какие данные могут обрабатываться</h2>
            <p className="mt-2">При просмотре сайта технические сведения, необходимые для его работы и безопасности, могут автоматически передаваться браузером и сервером. Если вы самостоятельно связываетесь с нами по телефону, электронной почте или через мессенджеры, мы можем получить контактные данные и информацию, которую вы сообщаете в своём обращении.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[#202322]">3. Цели использования информации</h2>
            <p className="mt-2">Информация используется для ответа на обращения, обсуждения заказов, подготовки предложений, организации взаимодействия с клиентами и обеспечения корректной работы сайта.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[#202322]">4. Передача и хранение данных</h2>
            <p className="mt-2">Мы не публикуем предоставленные в обращениях контактные данные. Доступ к информации может предоставляться поставщикам связи и сервисов, через которые вы сами решили связаться с нами, а также в случаях, предусмотренных применимым законодательством. Информация хранится только в течение периода, необходимого для соответствующей цели или установленного законом.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[#202322]">5. Сторонние сервисы</h2>
            <p className="mt-2">Ссылки на Instagram, Telegram и Viber ведут на сторонние сервисы, которые обрабатывают данные в соответствии с собственными правилами конфиденциальности. Передавая им информацию, ознакомьтесь с условиями соответствующего сервиса.</p>
          </section>
          <section>
            <h2 className="text-lg font-semibold text-[#202322]">6. Контакты</h2>
            <p className="mt-2">По вопросам, связанным с конфиденциальностью и обработкой информации, свяжитесь с ИП Наумович по телефону <a className="font-medium text-[#C65D32] hover:underline" href="tel:+375259929001">+375 25 992-90-01</a> или через страницу <Link className="font-medium text-[#C65D32] hover:underline" href="/contacts">Контакты</Link>.</p>
          </section>
        </div>
        <Link href="/" className="mt-10 inline-flex items-center gap-2 text-sm font-semibold text-[#C65D32] hover:text-[#202322]">← Вернуться на главную</Link>
      </article>
    </main>
  );
}
