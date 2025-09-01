import { compareSync, hashSync } from "bcryptjs"
import env from "@/.env.json"
import { TOKEN_LENGTH } from "@/app/lib/consts"
import { randChar } from "@/app/lib/util"

const SALT = env.salt

const SALT_LENGTH = SALT.length

export function hash(password: string) {
  return hashSync(password, SALT).slice(SALT_LENGTH)
}

export function compare(password: string, passwordHash: string) {
  return compareSync(password, `${SALT}${passwordHash}`)
}

export function genToken() {
  return randChar(TOKEN_LENGTH)
}
