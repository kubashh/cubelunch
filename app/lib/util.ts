import { redirect } from "next/navigation"
import { CODE_ADMIN, CODE_COOK, CODE_USER } from "./consts"

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
