'use client'  
import { useMemo } from "react"
import { useStore } from "@/src/store/store"
import { toast } from "react-toastify"
import ProductDetail from "./ProductDetail"
import { formatPrice } from "@/src/utils"
import { createOrder } from "@/actions/create-order-action"
import { OrderSchema } from "@/src/schema"

export default function OrderSumary() {

  const order = useStore(state => state.order)
  const total = useMemo(() => order.reduce((total, item)=> total + (item.quantity * item.price), 0), [order])

  const handleCreateOrder = async (formData: FormData) => {
    const data = {
      name: formData.get('name') 

    }

    const result = OrderSchema.safeParse(data)
    if(!result.success) {
      result.error.issues.forEach((issue) => {
       toast.error(issue.message) 
      })
      return
    }

    const response = await createOrder(data)
    if(response?.errors) {
      response.errors.forEach((issue) => {
           toast.error(issue.message) 
          })
    }
   }

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-2xl text-center font-semibold">Mi pedido</h1>

      {order.length === 0 ? 
        <p className="text-center my-10 text-2xl">El pedido está vacio</p>
        : ( 
        <div className="mt-5">
        {order.map((item) => (
          <ProductDetail 
          key={item.id} 
          item={item}/>
        ))}

        <p className="text-center mt-20 text-xl">Total: {''}
          <span className="font-semibold">{formatPrice(total)}</span>
        </p>
        <form 
          className="w-full mt-10 space-y-5 " 
          action={handleCreateOrder}
        >
          <input 
            type="text" 
            placeholder="Nombre" 
            className="bg-white border border-gray-100 w-full p-2"
            name="name"
            />
          <input 
            type="submit" 
            className="py-2 rounded uppercase  text-white bg-black w-full text-center cursor-pointer font-semibold" 
            value='Confirmar' 
            
            />
        </form>
        
      </div>
      )} 
    </aside>
  )
}
