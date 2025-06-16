import { users } from "@/db/db"
import { cookies } from "next/headers"
import { TOKEN_LENGTH } from "./consts"
import { navigate, navigateByRule } from "./util"
import { compare, genToken } from "@/db/crypt"

async function getTokenFromCookies() {
  const cookieStore = await cookies()
  return cookieStore.get(`token`)?.value
}

export async function getUserFromCookies() {
  const token = await getTokenFromCookies()
  return users.get(`token`, token)
}

async function isLogged() {
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
  if (compare(password, user.passwordHash)) {
    user.token = genToken()

    users.createById(user.id, user)

    return { rule: user.rule, token: user.token }
  }
}
