import { products } from "@/db/db"
import Image from "next/image"

function Product({ label, cost, img }: Product) {
  return (
    <div className="w-54 my-3 p-2 flex gap-3 bg-zinc-900">
      <span>{label}</span>
      <span>{cost} </span>
      <Image priority={true} width="40" height="40" alt="" src={img} />
    </div>
  )
}

function ProductsList() {
  return (
    <div>
      <h2>Products</h2>
      {products.map((p) => (
        <Product key={p.id} {...p} />
      ))}
    </div>
  )
}

export default function KitchenPage() {
  return (
    <>
      <h1>Kitchen</h1>
      <ProductsList />
    </>
  )
}
