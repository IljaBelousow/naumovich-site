import Link from "next/link";
import Image from "next/image";

export const metadata = { 
  title: "Профиль края — ИП Наумович" 
};

export default function EdgePage() {
  return (
    <main className="w-full bg-white pt-24 sm:pt-32 min-h-screen">
      <div className="w-full px-5 py-8 sm:px-8 lg:px-12 xl:px-16">
        <Link 
          href="/catalog" 
          className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-gray-900 mb-8 inline-block transition-colors"
        >
          ← Весь каталог
        </Link>
        
        <h1 className="text-3xl sm:text-4xl font-extralight tracking-tight text-gray-900 mb-8">
          Профиль края
        </h1>

        <div className="max-w-4xl border border-gray-100 bg-gray-50 p-4 sm:p-8 rounded-sm">
          <Image 
            src="/images/profil_kraya.jpg" 
            alt="Профиль края МДФ" 
            width={1000} 
            height={800} 
            className="w-full h-auto object-contain" 
            priority
          />
        </div>
      </div>
    </main>
  );
}