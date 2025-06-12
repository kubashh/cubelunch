import Product from "./Product"
import { products } from "@/db/db"

export default function KitchenPage() {
  return (
    <>
      <div className="my-3 p-2 grid grid-cols-5 font-bold">
        <span>Nazwa</span>
        <span>Koszt</span>
        <span>Zdjęcie</span>
      </div>
      {products.data.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </>
  )
}
