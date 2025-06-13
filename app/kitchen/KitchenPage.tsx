import Product from "./Product"
import { getProducts } from "@/app/actions/getAction"

export default async function KitchenPage() {
  const products = await getProducts()

  return (
    <>
      <div className="my-3 p-2 grid grid-cols-5 font-bold">
        <span>Nazwa</span>
        <span>Koszt</span>
        <span>Zdjęcie</span>
      </div>
      {products.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </>
  )
}
