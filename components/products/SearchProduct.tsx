'use client'
import { searchSchema } from "@/src/schema"
import { redirect, useRouter } from "next/navigation"
import { toast } from "react-toastify"

export default function SearchProduct() {
  const router = useRouter()

  const handleSearchAction = (formData: FormData)=> {
      const data = {
        search: formData.get('search')
      }

      const result = searchSchema.safeParse(data)
      if(!result.success) {
        result.error.issues.forEach((issue) => {
          toast.error(issue.message)
        })
        return
      }

      router.push(`/admin/products/search?search=${result.data.search}`)

  }

  return (
    <form className='flex items-center' action={handleSearchAction}>
        <input type="text" placeholder='Buscar producto' className='bg-gray-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5'
        name='search'  />
        <input type="submit"
            value={"Buscar"}
             className='bg-indigo-600 ml-2 p-2 text-white cursor-pointer'/>
    </form>
  )
}
