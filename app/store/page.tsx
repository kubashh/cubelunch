import { Header } from "../components/Header"
import { navigateToken } from "../lib/utilServer"

const products = [1, 2, 3, 4, 5, 6, 7, 8, 9]

function Product({ n }: { n: number }) {
  return <div className="w-50 h-50 rounded-2xl bg-zinc-900">Product {n}</div>
}

export default async function Store() {
  await navigateToken(`store`)

  return (
    <>
      <Header logout />

      <main className="m-6 grid grid-cols-[repeat(auto-fit,200px)] gap-8 justify-center">
        {products.map((p) => (
          <Product key={p} n={p} />
        ))}
      </main>
    </>
  )
}
