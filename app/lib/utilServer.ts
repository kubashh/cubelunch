import { users } from "@/db/db"
import { cookies } from "next/headers"
import { CHARSET, TOKEN_LENGTH } from "./consts"
import { getUserIdByToken } from "@/db/fns"
import { navigate, navigateByRule } from "./util"

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
  if (!(await isLogged())) return

  // login
  const token = await getTokenFromCookies()
  if (token?.length !== TOKEN_LENGTH) return navigate(`/`, currentUrl)

  navigateByRule(getUserIdByToken(token), currentUrl)
}

export function getElementFromUrl(url: string, key: string) {
  return Object.fromEntries(new URL(url).searchParams.entries())[key]
}

export function randChar() {
  return CHARSET.at(Math.floor(Math.random() * CHARSET.length))
}

const MAX_PRODUCT_ID = 2 ** 52
export function genId(arr: Obj<any>[]) {
  let id = Math.floor(Math.random() * MAX_PRODUCT_ID)
  for (const e of arr) if (e.id === id) return genId(arr)
  return id
}
