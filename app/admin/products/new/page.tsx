import AddProductForm from "@/components/products/AddProductForm";
import ProductForm from "@/components/products/ProductForm";
import Header from "@/components/ui/Header";

export default function CreateProductPage() {
    return (
      <>
        <Header>Subir producto</Header>
        <AddProductForm>
          <ProductForm/>
        </AddProductForm>
      </>
    )
  }
  