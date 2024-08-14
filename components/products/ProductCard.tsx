import { formatPrice } from "@/src/utils"
import { Product } from "@prisma/client"

type ProductCardProps = {
    product: Product
}
export default function ProductCard({product}: ProductCardProps) {
  return (
    <div className="bg-white">
        <div className="p-5">
            <h3 className="text-2xl font-semibold"> {product.name}</h3>
            <p className="mt-5 font-bold text-3xl text-amber-500">{formatPrice(product.price)}
            </p>
        </div> 
    </div>
  )
}
