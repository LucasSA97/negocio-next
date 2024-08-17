import { useStore } from "@/src/store/store"
import { OrderItem } from "@/src/types"
import { formatPrice } from "@/src/utils"
import { XCircleIcon, MinusIcon, PlusIcon } from '@heroicons/react/24/outline'
import { useMemo } from "react"

type ProductDetailProps = {
    item: OrderItem
}

export default function ProductDetail({item}: ProductDetailProps) {

    const increaseQuantity = useStore(state => state.increaseQuantity)
    const decreaseQuantity = useStore(state => state.decreaseQuantity)
    const disableDecreaseButton = useMemo(() => item.quantity === 1, [item])

  return (
    <div className="shadow space-y-1 p-4 bg-white  border-t border-gray-200 ">
  <div className="space-y-4">
    <div className="flex justify-between items-start">
        <p className="text-xl font-bold">{item.name} </p>

        <button
          type="button"
          onClick={() => {}}
        >
          <XCircleIcon className="text-red-600 h-8 w-8"/>
        </button>
    </div>
    <p className="text-2xl text-amber-500 font-black">
        {formatPrice(item.price)}
    </p>
    <div className="flex gap-5 px-10 py-2 bg-gray-100 w-fit rounded-lg">
        <button
          type="button"
          disabled={disableDecreaseButton}
          onClick={() => decreaseQuantity(item.id)}
          className="disabled:opacity-30"
          >
            <MinusIcon
             className="h-6 w-6 hover:bg-slate-300 rounded-full"/>
        </button>

        <p className="text-lg font-black ">
          {item.quantity}
        </p>

        <button
           type="button"
           onClick={() => increaseQuantity(item.id)}
        >
            <PlusIcon className="h-6 w-6 hover:bg-slate-300 rounded-full"/>
        </button>
    </div>
    <p className="text-xl font-black text-gray-700">
        Subtotal: {''}
        <span className="font-normal"> 
            {formatPrice(item.subTotal )}
        </span>
    </p>
  </div>
</div>
  )
}
