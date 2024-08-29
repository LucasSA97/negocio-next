import Header from "@/components/ui/Header";
import SearchProduct from "@/components/products/SearchProduct";
import { prisma } from "@/src/lib/prisma";
import ProductTable from "@/components/products/ProductsTable";

async function searchProductsList(searchTerm: string) {
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
  });
  return products;
}


export default async function SearchProductPage({ searchParams }: { searchParams: { search: string } }) {
  const products = await searchProductsList(searchParams.search);

  return (
    <>
      <Header>Resultados de búsqueda: {searchParams.search} </Header>

      <div className="flex flex-col gap-5 lg:flex-row lg:justify-end">
        <SearchProduct />
      </div> 

      {products.length ? (
        <ProductTable products={products} />
      ) : 
        <p className="text-center text-lg font-bold">No hay resultados</p>
      }
    </>
  );
}

