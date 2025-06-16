import Header from "../components/Header"
import Product from "./Product"
import { navigateToken } from "../lib/utilServer"
import { getProducts } from "@/app/actions/getAction"

export default async function Store() {
  await navigateToken(`store`)

  const products = await getProducts()

  return (
    <>
      <Header cart logout />

      <main className="m-6 grid grid-cols-[repeat(auto-fit,232px)] gap-4 justify-center">
        {products.map((p) => (
          <Product key={p.id} {...p} />
        ))}
      </main>
    </>
  )
}
