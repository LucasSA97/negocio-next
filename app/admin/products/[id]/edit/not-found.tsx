import Header from '@/components/ui/Header'
import Link from 'next/link'
import React from 'react'

export default function NotFound() {
  return (
    <div className='text-center'>
        <Header>Producto no encontrado</Header>
        <Link 
        className='bg-amber-400 text-black px-10 py-3 text-xl text-center font-semibold cursor-pointer w-full lg:w-auto'
        href="/admin/products">Volver</Link>
    </div>
  )
}
