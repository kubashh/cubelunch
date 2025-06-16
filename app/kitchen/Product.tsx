"use client"

import { useState } from "react"
import ImageGrabber from "./ImageGrabber"
import { deleteProduct, editProduct } from "../actions/products"

const editProductAction = (oldData: Product) => async (formData: FormData) => {
  const cost = Number(formData.get(`cost`) as string).toFixed(2)

  if (!Number(cost)) return alert(`Zła cena!`)

  let isChanged = false
  for (const [key, val] of Object.entries(oldData))
    if (val !== formData.get(key)) {
      isChanged = true
      break
    }

  if (!isChanged) return alert(`Nic nie zostało zmienione`)

  const product = {
    id: oldData.id,
    name: formData.get(`name`) as string,
    cost,
    img: oldData.img || `/images/defaultImage.png`,
  }
  await editProduct(product)

  location.reload()
}

export default function Product(p: Product) {
  const [src, setSrc] = useState(p.img)
  return (
    <form
      className="mb-[4px] border-t-4 border-zinc-900 p-2 grid grid-cols-5"
      action={editProductAction({ ...p, img: src })}
    >
      <input className="mr-2" name="name" defaultValue={p.name} />
      <input className="mr-2" name="cost" defaultValue={p.cost} />
      <ImageGrabber src={src} cb={setSrc} id={p.id} />
      <button type="submit" className="cursor-pointer">
        Zapisz
      </button>
      <button
        type="button"
        onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()

          await deleteProduct(p.id)
          location.reload()
        }}
        className="cursor-pointer"
      >
        Usuń
      </button>
    </form>
  )
}
