import { users, products, saveUsers } from "./db"
import { compare, genToken, hash } from "./crypt"

export function getToken(login: string, password: string) {
  const user = getUser(login)
  if (!user) return
  if (compare(password, user.passwordHash)) {
    user.token = genToken()

    saveUsers()

    return user.token
  }
}

// export function getUserByToken(token: string) {
//   return users.find((u) => u.token === token)
// }

export function getUserIdByToken(token: string) {
  return users.find((u) => u.token === token)?.rule || 0
}

function getUser(name: string) {
  return users.find((u) => name === u.username)
}

export function setUser(user: registerProps) {
  if (getUser(user.username)) return { message: `Użytkownik o takim imieniu już istnieje!` }

  users.push({
    username: user.username,
    passwordHash: hash(user.password),
    email: user.email,
    token: genToken(),
    rule: 1,
    cart: [],
  })

  saveUsers()
}

export function setProduct(label: string, cost: string, img?: string) {
  products.push({
    label,
    cost,
    img: img || "images/defaultImage.png",
    id: genProductId(),
  })
}

const MAX_PRODUCT_ID = 2 ** 52
function genProductId() {
  let id = Math.floor(Math.random() * MAX_PRODUCT_ID)
  for (const p of products) if (p.id === id) return genProductId()
  return id
}
