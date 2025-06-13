"use server"

import { products } from "@/db/db"

// products.create({
//   name,
//   cost,
//   img: img || "images/defaultImage.png",
//   id: 0,
// })
export async function addProduct(product: Product) {
  products.create(product)
}

export async function editProduct(product: Product) {
  products.createById(product.id, product)
}

export async function deleteProduct(id: number) {
  products.deleteById(id)
}
