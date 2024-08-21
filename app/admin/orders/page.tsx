import OrderCard from '@/components/order/OrderCard'
import Header from '@/components/ui/Header'
import { prisma } from '@/src/lib/prisma'

async function getPendingOrders() {
  const orders = await prisma.order.findMany({
    where: {
      status: false,
    },
    include: {
      orderProducts: {
        include: {
          product: true, 
        }
      }
    }
  })
  return orders
}
export default async function OrdersPage() {
  const orders = await getPendingOrders()

  return (
    <>
      <Header>Administrar Ordenes</Header>
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
