"use client"

import type { MouseEvent } from "react"
import Image from "next/image"
import { editProduct } from "../actions/editProduct"

const editProductAction = (id: number) => async (formData: FormData) => {
  const cost = formData.get(`cost`) as string

  if (!Number(cost)) return alert(`Zła cena!`)

  const product = {
    id,
    name: formData.get(`name`) as string,
    cost: formData.get(`cost`) as string,
    img: "/images/defaultImage.png",
  }
  await editProduct(product)
}

export default function Product({ name, cost, img, id }: Product) {
  return (
    <form className="mb-[4px] border-t-4 border-zinc-900 p-2 grid grid-cols-5" action={editProductAction(id)}>
      <input className="mr-2" name="name" defaultValue={name} />
      <input className="mr-2" name="cost" defaultValue={cost} />
      <Image className="mr-2" priority={true} width="40" height="40" alt="" src={img} />
      <button type="submit" className="cursor-pointer">
        Zapisz
      </button>
      <button
        type="button"
        onClick={async (e: MouseEvent<HTMLButtonElement>) => {
          e.preventDefault()

          await fetch(`api/products?id=${id}`, { method: `DELETE` })
        }}
        className="cursor-pointer"
      >
        Usuń
      </button>
    </form>
  )
}
