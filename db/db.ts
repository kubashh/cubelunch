import { existsSync, readFileSync, writeFileSync } from "fs"
import { genId } from "@/app/lib/utilServer"

class ArrDB<T extends { id: number }> {
  arr: T[]
  path: string
  constructor(fileName: string) {
    this.path = `db/data/${fileName}.json`
    if (existsSync(this.path)) {
      const buf = String(readFileSync(this.path))
      this.arr = JSON.parse(buf)
    } else this.arr = []
  }

  getAll() {
    return this.arr
  }

  get(key: string, value: any) {
    return this.arr.find((e: any) => e[key] === value)
  }

  getById(id: number) {
    return this.arr.find((e) => e.id === id)
  }

  create(obj: T) {
    this.arr.push({ ...obj, id: genId(this.arr) })
    writeJsonFile(this.path, this.arr)
  }

  createById(id: number, obj: T) {
    const index = this.arr.findIndex((e) => e.id === id)
    this.arr[index] = { ...obj, id }
    writeJsonFile(this.path, this.arr)
  }

  delete(key: string, value: any) {
    const index = this.arr.findIndex((e: any) => e[key] === value)
    if (index === -1) return
    this.arr.splice(index, 1)
    writeJsonFile(this.path, this.arr)
  }

  deleteById(id: number) {
    const index = this.arr.findIndex((e) => e.id === id)
    if (index === -1) return
    this.arr.splice(index, 1)
    writeJsonFile(this.path, this.arr)
  }
}

export const users = new ArrDB<User>(`users`)
export const products = new ArrDB<Product>(`products`)

function writeJsonFile(path: string, content: any) {
  console.time(`writeFile`)
  writeFileSync(path, JSON.stringify(content))
  console.timeEnd(`writeFile`)
}
