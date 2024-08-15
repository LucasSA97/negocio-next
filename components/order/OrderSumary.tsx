'use client'  
import { useStore } from "@/src/store/store"

export default function OrderSumary() {

  const order = useStore(state => state.order)

  return (
    <aside className="lg:h-screen lg:overflow-y-scroll md:w-64 lg:w-96 p-5">
      <h1 className="text-2xl text-center font-semibold">Mi pedido</h1>

      {order.length === 0 ? (
        <p className="text-center my-10 text-2xl">El carrito está vacio</p>
      ) : (
        order.map((product, index) => (
          <div key={index}>
            <p>
              {product.quantity} - {product.name}
            </p>
          </div>
        ))
        )))}
    </aside>
  )
}
