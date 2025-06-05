import { users } from "@/db/db"
import { cookies } from "next/headers"
import { redirect } from "next/navigation"

async function getTokenFromCookies() {
  const cookieStore = await cookies()
  return cookieStore.get(`token`)?.value
}

export async function getUserFromCookies() {
  const token = await getTokenFromCookies()
  return users.find((user) => user.token === token)
}

export async function isLogged() {
  return !!(await getUserFromCookies())
}

export function navigate(url: urlType): never {
  redirect(url)
}

export async function navigateToken(currentUrl: urlType) {
  if (await isLogged()) {
    if (currentUrl !== `store`) redirect(`store`)
    return
  }

  if (currentUrl !== `/`) redirect(`/`)
}
