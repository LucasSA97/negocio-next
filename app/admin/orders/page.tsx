import OrderCard from '@/components/order/OrderCard'
import Header from '@/components/ui/Header'
import { prisma } from '@/src/lib/prisma'
import { revalidatePath } from 'next/cache'

async function getPendingOrders() {
  
}
export default async function OrdersPage() {
  const orders = await getPendingOrders()

  const refreshOrders = async () => {
    'use server'

    revalidatePath('/admin/orders')
  }

  return (
    <>
      <Header>Administrar Ordenes</Header>

      <form action={refreshOrders}>

      <input type="submit"
        className="bg-amber-400 w-full lg:w-auto text-xl px-10 py-3 text-center cursor-pointer"
        value='Actualizar Ordenes' />

      </form>


      {orders.length ? (
        <div className='grid grid-cols-1 lg:grid-cols-2 2xl:grid-cols-3 gap-4 mt-5 items-start'>
          {orders.map(order => (  
            <OrderCard key={order.id} 
            order={order} />
          ))}
        </div>
      ) : 
      <p className="text-center font-bold">No hay ordenes pendientes</p>}
    </>
  ) 
}
