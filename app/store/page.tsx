import Image from "next/image"
import Header from "../components/Header"
import { navigateToken } from "../lib/utilServer"
import { getProducts } from "@/app/actions/getAction"

function Product({ name, cost, img }: Product) {
  return (
    <div className="w-54 p-2 rounded-xs bg-zinc-900">
      <span>{name}</span>
      <span className="float-right">{cost} </span>
      <Image priority={true} width="200" height="200" alt="" src={img} />
      <button className="w-full text-xl cursor-pointer">Dodaj do koszyka</button>
    </div>
  )
}

export default async function Store() {
  await navigateToken(`store`)

  const products = await getProducts()

  return (
    <>
      <Header logout />

      <main className="m-6 grid grid-cols-[repeat(auto-fit,200px)] gap-8 justify-center">
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </main>
    </>
  )
}
