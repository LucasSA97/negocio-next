'use client'

export default function AddProductForm({children}: {children: React.ReactNode}) {

    const handleSubmit = async (formData: FormData) => {
        

    }

  return (
    <div className='bg-white mt-10 px-5 py-10 rounded-md shadow-md max-w-3xl mx-auto'>

        <form 
            className='space-y-5'
            action={handleSubmit}
            >

            {children}

            <input 
            className='bg-indigo-400 hover:bg-indigo-600 text-white uppercase font-bold w-full p-3 rounded-md cursor-pointer'
            type="submit"
            value='Registrar Producto' />

        </form>

    </div>
  )
}
