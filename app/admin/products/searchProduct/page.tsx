import Header from "@/components/ui/Header";
// import { products } from '../../../../prisma/data/products';
import {SearchProduct} from "@/components/products/SearchProduct"

import { prisma } from "@/src/lib/prisma";
import ProductTable from "@/components/products/ProductsTable";

async function searchProducts(searchTerm: string) {
  const products = await prisma.product.findMany({
    where: {
      name: {
        contains: searchTerm,
        mode: 'insensitive'
  }
},
include: {
  category: true
}
})
return products 
}

export default async function SearchProduct({searchParams}: {searchParams: {search: string}}) {

  const products = await searchProducts(searchParams.search)

  return (
    <>
    <Header>Resultados: </Header>

    <div className="flex flex-col gap-5 lg:flex-row lg:justify-end">
        <SearchProduct searchParams={searchParams}/>
      </div> 
    {products.length ? (
      <ProductTable products={products} />

    ): <p>No hay resultados</p>}
        
        </>
      )
}
