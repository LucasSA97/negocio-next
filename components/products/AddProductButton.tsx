
'use client'

import { Product } from "@prisma/client"
import { useStore } from "@/src/store/store"

type AddProductButtonProps = {
    product: Product
}
export default function AddProductButton({product}: AddProductButtonProps) {

    const addToOrder = useStore(state => state.addToOrder)

  return (
<button 
className="bg-amber-500 hover:bg-amber-600 text-white w-full mt-5 p-3 uppercase font-bold cursor-pointer transition-colors"
type="button"
onClick={() => addToOrder(product)}
>Añadir
</button>
  )
}
