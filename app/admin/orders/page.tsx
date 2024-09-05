'use client'
import OrderCard from '@/components/order/OrderCard'
import Header from '@/components/ui/Header'
import { prisma } from '@/src/lib/prisma'
import { OrderWithProducts } from '@/src/types'
import { revalidatePath } from 'next/cache'
import useSWR from 'swr'


export default  function OrdersPage() {

  const url = '/admin/orders/api'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, error, isLoading} = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 10000,
    revalidateOnFocus: false
  })

  if(isLoading) return <p>Cargando...</p>


  if(data) return (
    <>
      <Header>Administrar Ordenes</Header>

    


      {data.length ? (
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
