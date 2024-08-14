'use client'
import { Category } from "@prisma/client"
import Link from "next/link"
import Image from "next/image"
import { useParams } from "next/navigation"

type CategoryIconPros = {
    category: Category
}
export default function CategoryIcon({
category
}: CategoryIconPros) {
    const params = useParams<{category: string}>()
  return (
    <div className={` ${category.slug === params.category ? 'bg-red-400  text-white border-indigo-200' : ''} flex items-center gap-4 w-full border-t border-rose-200 p-3 last-of-type:border-b`}>
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
