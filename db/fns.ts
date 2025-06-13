import { users } from "./db"
import { compare, genToken } from "./crypt"

export function getTokenAndRule(name: string, password: string): { rule: number; token: string } | undefined {
  const user = users.get(`name`, name)
  if (!user) return
  if (compare(password, user.passwordHash)) {
    user.token = genToken()

    users.createById(user.id, user)

    return { rule: user.rule, token: user.token }
  }
}

export function getUserIdByToken(token: string) {
  return users.get(`token`, token)?.rule || 0
}
