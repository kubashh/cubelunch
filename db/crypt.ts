import { compareSync, hashSync } from "bcryptjs"
import { TOKEN_LENGTH } from "@/app/lib/consts"
import { randChar } from "@/app/lib/util"

if (!process.env.SALT) throw Error(`There is no SALT! Generete it and save in '.env' file`)
const SALT = process.env.SALT
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
