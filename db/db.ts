import usersData from "./data/users.json"
import productsData from "./data/products.json"

export const users: User[] = usersData
export const products: Product[] = productsData

function writeJsonFile(fileName: string, content: any) {
  import("fs").then((fs) => fs.writeFileSync(`db/data/${fileName}.json`, JSON.stringify(content)))
}

export function saveUsers() {
  writeJsonFile(`users`, users)
}

export function saveProducts() {
  writeJsonFile(`users`, users)
}
