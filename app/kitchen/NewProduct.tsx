"use client"

import { useSignal } from "../lib/signals"
import Product from "./Product"

export default function NewProduct() {
  const isAdded = useSignal(false)

  const newProduct = {
    id: -1,
    name: `NowyProdukt`,
    cost: `0.00`,
    img: `data:image/jpeg;base64`,
  }

  return isAdded.value ? (
    <div>
      <Product {...newProduct} />
    </div>
  ) : (
    <button className="cursor-pointer" onClick={() => (isAdded.value = true)}>
      Dodaj produkt
    </button>
  )
}
