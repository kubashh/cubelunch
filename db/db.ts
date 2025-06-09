import { writeFileSync } from "node:fs"
import usersData from "./data/users.json"
import productsData from "./data/products.json"

export const users: User[] = usersData
export const products: Product[] = productsData

function writeJsonFile(fileName: string, content: any) {
  console.time(`writeFile`)
  writeFileSync(`db/data/${fileName}.json`, JSON.stringify(content))
  console.timeEnd(`writeFile`)
}

export function saveUsers() {
  writeJsonFile(`users`, users)
}

export function saveProducts() {
  writeJsonFile(`users`, users)
}
