"use server"

import { getToken } from "@/db/fns"

export async function token(data: tokenProps) {
  if (data.username.length < 4 || data?.password.length < 4) return { message: `Złe dane` }

  const token = getToken(data.username, data.password)
  if (!token) return { message: `Nie udało się zalogować, spróbuj ponownie.` }

  return { token }
}
