import { Category } from "@prisma/client"
import Link from "next/link"
import Image from "next/image"

type CategoryIconPros = {
    category: Category
}
export default function CategoryIcon({
  category
}: CategoryIconPros) {
  return (
    <div className={`flex items-center gap-4 w-full border-t border-rose-200 p-3 last-of-type:border-b`}>
        <div className="w-16 h-16 relative">
        <Image 
        fill
        src={`/icon_${category.slug}.svg`} 
        alt="Imagen categoria" />
        </div>

        <Link
        href={`/order/${category.slug}`}
        className="text-xl font-semibold"
        >{category.name}
        </Link>
    </div>
  )
}
