import { formatPrice } from "@/src/utils"
import { Product } from "@prisma/client"
import Image from "next/image"
import AddProductButton from "./AddProductButton"

type ProductCardProps = {
    product: Product
}
export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="bg-white border-blue-300 shadow-lg">
        <Image className="w-full" src={`/products/${product.image}.jpg`} alt={`Imagen platillo ${product.name}`} width={400} height={500}
        quality={90} />
        <div className="p-5">
            <h3 className="text-2xl font-semibold"> {product.name}</h3>
            <p className="mt-5 font-bold text-3xl text-amber-500">{formatPrice(product.price)}
            </p>
        <AddProductButton
        product={product}
        />
        </div> 
    </div>
  )
}
