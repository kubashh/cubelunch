import { CHARSET } from "./consts"

export function randChar() {
  return CHARSET.at(Math.floor(Math.random() * CHARSET.length))
}
