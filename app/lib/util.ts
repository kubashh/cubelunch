import { redirect } from "next/navigation"
import { CHARSET, CODE_ADMIN, CODE_COOK, CODE_USER } from "./consts"

export function randChar(n = 1) {
  let str = ``
  for (let i = 0; i < n; i++) str += CHARSET.at(Math.floor(Math.random() * CHARSET.length))
  return str
}

export function navigate(url: UrlType, curentUrl: UrlType) {
  if (curentUrl !== url) redirect(url)
}

export function navigateByRule(rule: number, currentUrl: UrlType) {
  switch (rule) {
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
