import { users, products } from "./db"
import { compare, genToken, hash } from "./crypt"

export function getToken(name: string, password: string) {
  const user = users.get(`name`, name)
  if (!user) return
  if (compare(password, user.passwordHash)) {
    user.token = genToken()

    return user.token
  }
}

export function getUserIdByToken(token: string) {
  return users.get(`token`, token)?.rule || 0
}

export function setUser(user: registerProps) {
  if (users.get(`name`, user.name)) return { message: `Użytkownik o takim imieniu już istnieje!` }

  users.create({
    id: 0,
    name: user.name,
    passwordHash: hash(user.password),
    email: user.email,
    token: genToken(),
    rule: 1,
    cart: [],
  })
}

export function setProduct(name: string, cost: string, img?: string) {
  products.create({
    name,
    cost,
    img: img || "images/defaultImage.png",
    id: 0,
  })
}
