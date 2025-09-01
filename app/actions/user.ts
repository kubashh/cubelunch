"use server"

import { genToken, hash } from "@/db/crypt"
import { users } from "@/db/db"
import { getTokenAndRule, getUserFromCookies } from "../lib/utilServer"

export async function token(
  data: TokenProps
): Promise<{ message?: string; rule?: number; token?: string }> {
  if (data.name.length < 4 || data.password.length < 4) return { message: `Złe dane` }

  const res = getTokenAndRule(data.name, data.password)
  if (!res) return { message: `Nie udało się zalogować, spróbuj ponownie.` }

  return res
}

function isUserValid(user: RegisterProps) {
  if (user.name.length < 4) return false
  if (user.password.length < 4) return false
  if (user.email.length < 4) return false
  return true
}

export async function register(data: RegisterProps) {
  if (!isUserValid(data)) return { message: `Złe dane!` }

  if (users.get(`name`, data.name)) return { message: `Użytkownik o takim imieniu już istnieje!` }

  users.create({
    id: 0,
    name: data.name,
    passwordHash: await hash(data.password),
    email: data.email,
    token: await genToken(),
    rule: 1,
    cart: {},
    items: {},
  })
}

export async function addToCart(id: number) {
  const user = await getUserFromCookies()
  if (!user) return { message: `Nie ma takiego użytkownika!` }

  const cart = user.cart

  if (!cart[id]) cart[id] = 1
  else cart[id]++

  users.createById(user.id, { ...user, cart })

  console.log(user.cart)
}
