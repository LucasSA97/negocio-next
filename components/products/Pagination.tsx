import Link from 'next/link'
import React from 'react'

type ProductsPaginationProps = {
    page: number
    totalPages: number
} 

export default function Pagination({page, totalPages} : ProductsPaginationProps) {

   const pages = Array.from({length: totalPages}, (_, i) => i + 1)

  return (
    <nav className='flex justify-center py-10'>
        {page > 1 && (
        <Link href={`/admin/products?page=${page - 1}`} className='bg-white p-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300  hover:bg-slate-200 focus:z-20 focus:outline-offset-0'>&laquo;
        </Link> 
        )}

        {pages.map(currentPage => (
            <Link
            className={`${page === currentPage && 'font-black bg-amber-300'} bg-white p-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300  hover:bg-slate-200 focus:z-20 focus:outline-offset-0`}
            href={`/admin/products?page=${currentPage}`} >
                {currentPage}
            </Link>
        ))}

        {page < totalPages && (
        <Link href={`/admin/products?page=${page + 1}`}         className='bg-white p-4 py-2 text-base font-medium text-gray-900 ring-1 ring-inset ring-gray-300  hover:bg-slate-200 focus:z-20 focus:outline-offset-0'
        >&raquo;
        </Link> 
        )}

    </nav>
  )
}
