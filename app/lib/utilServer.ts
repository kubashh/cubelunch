import { redirect } from "next/navigation"
import { products, users } from "@/db/db"
import { cookies } from "next/headers"
import { TOKEN_LENGTH } from "./consts"
import { navigate, navigateByRule, randChar } from "./util"

export async function getTokenFromCookies() {
  const cookieStore = await cookies()
  return cookieStore.get(`token`)?.value
}

export async function getUserFromCookies() {
  const token = await getTokenFromCookies()
  return users.get(`token`, token)
}

export async function getUserFromCookiesNavigate(url: UrlType) {
  const token = await getTokenFromCookies()
  const user = users.get(`token`, token)
  if (!user) redirect(`login`)
  return user
}

export async function isLogged() {
  return !!(await getUserFromCookies())
}

export async function navigateToken(currentUrl: UrlType) {
  if (!(await isLogged())) {
    if ([`store`, `kitchen`, `admin`].includes(currentUrl)) return navigate(`/`, currentUrl)
    return
  }

  // login
  const token = await getTokenFromCookies()
  if (token?.length !== TOKEN_LENGTH) return navigate(`/`, currentUrl)

  navigateByRule(getUserIdByToken(token), currentUrl)
}

export function getElementFromUrl(url: string, key: string) {
  return Object.fromEntries(new URL(url).searchParams.entries())[key]
}

const MAX_PRODUCT_ID = 2 ** 52
export function genId(arr: Obj<any>[]) {
  let id = Math.floor(Math.random() * MAX_PRODUCT_ID)
  for (const e of arr) if (e.id === id) return genId(arr)
  return id
}

export function getUserIdByToken(token: string) {
  return users.get(`token`, token)?.rule || 0
}

export function getTokenAndRule(name: string, password: string) {
  const user = users.get(`name`, name)
  if (!user) return
  if (Bun.password.verifySync(password, user.passwordHash)) {
    user.token = genToken()

    users.createById(user.id, user)

    return { rule: user.rule, token: user.token }
  }
}

export function getCartProductsFromUser(user: User) {
  const arr: [Product, number][] = []
  for (const i in user.cart) {
    const p = products.getById(Number(i))
    if (p) arr.push([p, user.cart[i]])
  }
  return arr
}

export function genToken() {
  return randChar(TOKEN_LENGTH)
}
