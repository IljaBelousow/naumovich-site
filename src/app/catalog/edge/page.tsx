import Link from "next/link";
import Image from "next/image";

export const metadata = { title: "Профиль края — ИП Наумович" };

export default function EdgePage() {
  return (
    <main className="w-full bg-white pt-20 min-h-screen">
      <div className="w-full px-5 py-16 sm:px-8 lg:px-12 xl:px-16">
        <Link href="/catalog" className="text-xs uppercase tracking-[0.25em] text-gray-400 hover:text-gray-900 mb-8 inline-block">
          ← Весь каталог
        </Link>
        
        <h1 className="text-4xl font-extralight tracking-tight text-gray-900 mb-12">Профиль края</h1>

        <div className="max-w-3xl border border-gray-100 bg-gray-50 p-4 sm:p-8">
          <Image 
            src="/images/profil-craya.jpg" 
            alt="Профиль края" 
            width={1000} 
            height={1200} 
            className="w-full h-auto object-contain" 
            priority
          />
        </div>
      </div>
    </main>
  );
}