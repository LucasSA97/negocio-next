import { prisma } from '@/src/lib/prisma';
import { products } from '../../../prisma/data/products';
import ProductCard from '@/components/products/ProductCard';
import Header from '@/components/ui/Header';

async function getProducts(category : string) {
  const products = await prisma.product.findMany({
    where: {
       category: {
        slug: category
    }
    },
  })

  return products
  
}
export default async function OrderPage({params}: {params: {category: string}}) {
  const products = await getProducts(params.category)

  return (
    <>  
      <Header>
        Selecciona tu pedido a continuación
      </Header>
    <div className='grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-4 gap-4 items-start'>
    {products.map((product) => (
      <ProductCard key={product.id} product={product}/>
    ))}

    </div>
    </>
  )
}
