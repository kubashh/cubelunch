function getExpires(days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  return date.toUTCString()
}

export function setCookie(name: CookieType, value: string, expires = 31) {
  document.cookie = `${name}=${value}; expires=${getExpires(expires)}`
}

export function getCookie(name: CookieType) {
  const cookies = document.cookie.split(`;`).map((e) => e.trim())
  const cookie = cookies.find((s) => s.split(`=`)[0] === name)
  return cookie?.split(`=`)[1]
}

export function deleteCookie(name: CookieType) {
  setCookie(name, ``, -1)
}
