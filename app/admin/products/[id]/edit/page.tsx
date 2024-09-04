import EditProductForm from "@/components/products/EditProductForm"
import ProductForm from "@/components/products/ProductForm"
import Header from "@/components/ui/Header"
import { prisma } from "@/src/lib/prisma"
import { notFound } from "next/navigation"


async function getProductById(id: number) {
        const product = await prisma.product.findUnique({
           where: {
            id
           } 
        })
        if(!product){
            notFound()
        }

        return product
}
export default async function EditProductsPage({params} : {params: {id: string}}) {

    const product = await getProductById(+params.id)

  return (
    <>
    <Header>Editar Producto: {product.name}</Header>
    <EditProductForm>
      <ProductForm 
      product={product}/>
    </EditProductForm>
    </>
  )
}
