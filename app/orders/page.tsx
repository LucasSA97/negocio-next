'use client'
import LatestOrderItem from '@/components/order/LatestOrderItem'
import OrderCard from '@/components/order/OrderCard'
import Logo from '@/components/ui/Logo'
import { OrderWithProducts } from '@/src/types'
import useSWR from 'swr'

export default function OrdersPage() {
 
  const url = '/orders/api'
  const fetcher = () => fetch(url).then(res => res.json()).then(data => data)
  const { data, error, isLoading} = useSWR<OrderWithProducts[]>(url, fetcher, {
    refreshInterval: 30000,
    revalidateOnFocus: true
  })

  if(isLoading) return <p>Cargando...</p>


  if(data) return  (
    <>
        <h1 className='text-2xl text-center mt-20 font-black'>
            Ordenes Listas
        </h1>
        <Logo/>

        {data.length ? (
          <div className='grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 max-w-5xl mx-auto gap-4 mt-10 items-start'>
            {data.map(order => (
              <LatestOrderItem 
              order={order} 
              key={order.id}/>
            ))}
          </div>
        )
          : <p className="text-center my-10 font-bold">No hay ordenes listas</p>
        }

    </>
  )
}
