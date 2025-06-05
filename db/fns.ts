import { users, products, saveUsers } from "./db"
import { compare, genToken, hash } from "./crypt"

function validateUser(user: any, email = false) {
  return user?.username?.length < 4 || user?.password?.length < 4 || email ? user?.email?.length < 4 : true
}

export function getToken(login: string, password: string) {
  const user = getUser(login)
  if (!user) return
  if (compare(password, user.passwordHash)) {
    return user.token
  }
}

export function getUserByToken(token: string) {
  return users.find((u) => u.token === token)
}

function getUser(name: string) {
  return users.find((u) => name === u.username)
}

export function setUser(user: any) {
  if (validateUser(user, true)) return { message: `Złe dane!` }

  if (getUser(user.username)) return { message: `Użytkownik o takim imieniu już istnieje!` }

  users.push({
    username: user.username,
    passwordHash: hash(user.password),
    email: user.email,
    token: genToken(),
    rule: 1,
  })

  saveUsers()

  return { success: true }
}

export function getProducts() {
  return products
}

export function setProduct(name: string, cost: string, img: string) {}
