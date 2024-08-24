import ProductTable from "@/components/products/ProductsTable"
import Header from "@/components/ui/Header"
import ToastNotification from "@/components/ui/ToastNotification"
import { prisma } from "@/src/lib/prisma"

async function getProducts(){
  const products = await prisma.product.findMany({
    include: {
      category: true
    }
  })

  return products
}

export type ProductsWithCategory = Awaited<ReturnType<typeof getProducts>>

export default async function ProductsPage() {

  const products = await getProducts()
  
  return (
    <>
      <Header>Administrar Productos</Header>

      <ProductTable 
          products={products} 
          />
    </>

  )
}
