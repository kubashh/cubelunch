"use client"

import Image from "next/image"
import { addToCart } from "../actions/user"

export default function Product({ name, cost, img, id }: Product) {
  return (
    <div className="w-58 px-4 py-2 rounded-xs bg-zinc-800">
      <span>{name}</span>
      <span className="float-right">{cost} zł</span>
      <Image className="my-1" width="200" height="200" alt="" src={img} />
      <button
        className="w-full text-xl text-blue-300 hover:text-blue-500 cursor-pointer"
        type="button"
        onClick={async () => {
          const ret = await addToCart(id)

          if (ret?.message) alert(ret.message)
        }}
      >
        Do koszyka
      </button>
    </div>
  )
}
