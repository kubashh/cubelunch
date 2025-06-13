"use server"

import { products, users } from "../../db/db"

export async function getProducts() {
  return products.getAll()
}

export async function getUsers() {
  return users.getAll()
}
