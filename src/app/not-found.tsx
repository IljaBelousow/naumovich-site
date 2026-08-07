import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] w-full items-center bg-white pt-20">
      <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-gray-500">
          404
        </p>
        <h1 className="mt-4 text-4xl font-extralight tracking-tight text-gray-900 sm:text-6xl">
          Страница не найдена
        </h1>
        <p className="mt-6 max-w-md text-lg font-light text-gray-600">
          Возможно, ссылка устарела или страница была перемещена.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/"
            className="border border-gray-900 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white"
          >
            На главную
          </Link>
          <Link
            href="/catalog"
            className="border border-gray-200 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-gray-900 transition-colors duration-300 hover:border-gray-900"
          >
            В каталог
          </Link>
        </div>
      </div>
    </main>
  );
}