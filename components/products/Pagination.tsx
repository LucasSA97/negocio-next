import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number
    totalPages: number
} 

export default function Pagination({page, totalPages} : ProductsPaginationProps) {
  return (
    <nav className='flex justify-center py-10'>
        {page < totalPages && (
        <Link href={`/admin/products?page=${page + 1}`} className='mx-2 bg-white p-4 py-2 text-sm text-gray-900 ring-1 ring-inset ring-gray-300 focus:z-20 focus:outline-offset-0'>&raquo;
        </Link> 
        )}

    </nav>
  )
}
