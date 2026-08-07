import Link from "next/link";
import type { Facade } from "@/data/facades";

export default function FacadeCard({ facade }: { facade: Facade }) {
  return (
    <Link href={`/catalog/${facade.slug}`} className="group block">
      <div className="relative aspect-[3/4] w-full overflow-hidden bg-gray-100">
        <span className="absolute inset-0 flex items-center justify-center text-6xl font-extralight text-gray-300 transition-colors duration-500 group-hover:text-gray-400">
          {facade.name.charAt(0)}
        </span>
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