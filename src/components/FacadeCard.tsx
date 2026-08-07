import Link from "next/link";
import Image from "next/image";
import type { Facade } from "@/data/facades";

export default function FacadeCard({ facade }: { facade: Facade }) {
  return (
    <Link href={`/catalog/${facade.slug}`} className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <Image
          src={facade.image}
          alt={`Фасад МДФ ${facade.name}`}
          fill
          sizes="(max-width: 640px) 50vw, 25vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="mt-4 flex items-baseline justify-between">
        <h2 className="text-lg font-light text-gray-900 transition-colors duration-300 group-hover:text-gray-500">
          {facade.name}
        </h2>
        <span className="hidden text-xs uppercase tracking-[0.2em] text-gray-400 sm:block">
          Смотреть
        </span>
      </div>
    </Link>
  );
}