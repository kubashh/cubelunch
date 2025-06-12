import { users } from "@/db/db"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { CODE_ADMIN, CODE_COOK, CODE_USER, TOKEN_LENGTH } from "./consts"
import { getUserIdByToken } from "@/db/fns"

async function getTokenFromCookies() {
  const cookieStore = await cookies()
  return cookieStore.get(`token`)?.value
}

export async function getUserFromCookies() {
  const token = await getTokenFromCookies()
  return users.find((user) => user.token === token)
}

async function isLogged() {
  return !!(await getUserFromCookies())
}

export function navigate(url: urlType, curentUrl: urlType) {
  if (curentUrl !== url) redirect(url)
}

export async function navigateToken(currentUrl: urlType) {
  if (!(await isLogged())) return

  // login
  const token = await getTokenFromCookies()
  if (token?.length !== TOKEN_LENGTH) return navigate(`/`, currentUrl)

  switch (getUserIdByToken(token)) {
    case CODE_USER:
      return navigate(`store`, currentUrl)
    case CODE_COOK:
      return navigate(`kitchen`, currentUrl)
    case CODE_ADMIN:
      return navigate(`admin`, currentUrl)
    default:
      return navigate(`/`, currentUrl)
  }
}
