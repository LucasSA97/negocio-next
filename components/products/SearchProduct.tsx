import React from 'react'

export default function SearchProduct() {
  return (
    <form className='flex items-center'>
        <input type="text" placeholder='Buscar producto' className='bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        name='search'  />
        <input type="submit"
            value={"Buscar"}
             className='bg-indigo-600 ml-2 p-2 text-white cursor-pointer'/>
    </form>
  )
}
