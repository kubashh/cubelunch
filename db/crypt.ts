import { CHARSET, TOKEN_LENGTH } from "@/app/lib/consts"
import { hashSync, compareSync } from "bcryptjs"

export function hash(password: string) {
  return hashSync(password, process.env.SALT)
}

export function compare(password: string, passwordHash: string) {
  return compareSync(password, passwordHash)
}

function randChar() {
  return CHARSET.at(Math.floor(Math.random() * CHARSET.length))
}

export function genToken() {
  let token = ``

  for (let i = 0; i < TOKEN_LENGTH; i++) token += randChar()

  return token
}
