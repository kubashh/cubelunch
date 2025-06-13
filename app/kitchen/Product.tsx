"use client"

import { deleteProduct, editProduct } from "../actions/products"
import ImageGrabber from "./ImageGrabber"
import { useState } from "react"

const editProductAction = (oldData: Product) => async (formData: FormData) => {
  const cost = Number(formData.get(`cost`) as string).toFixed(2)

  if (!Number(cost)) return alert(`Zła cena!`)

  // TODO check
  for (const [key, val] of Object.entries(oldData))
    if (val === formData.get(key)) return alert(`Nic nie zostało zmienione`)

  const product = {
    id: oldData.id,
    name: formData.get(`name`) as string,
    cost: Number(formData.get(`cost`) as string).toFixed(2),
    img: oldData.img || `/images/defaultImage.png`,
  }
  await editProduct(product)

  // location.reload()
}

export default function Product({ name, cost, img, id }: Product) {
  const [src, setSrc] = useState(img)
  return (
    <form
      className="mb-[4px] border-t-4 border-zinc-900 p-2 grid grid-cols-5"
      action={editProductAction({ id, name, cost, img: src })}
    >
      <input className="mr-2" name="name" defaultValue={name} />
      <input className="mr-2" name="cost" defaultValue={cost} />
      <ImageGrabber src={src} cb={setSrc} />
      <button type="submit" className="cursor-pointer">
        Zapisz
      </button>
      <button
        type="button"
        onClick={async (e: React.MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()

          await deleteProduct(id)
          location.reload()
        }}
        className="cursor-pointer"
      >
        Usuń
      </button>
    </form>
  )
}
