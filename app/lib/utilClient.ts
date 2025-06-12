// export async function post(url: string, cb: (data: any) => void, data: any) {
//   const response = await fetch(`api/${url}`, {
//     method: `POST`,
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   })

//   if (response.ok) {
//     cb(await response.json())
//   } else throw Error(response)
// }

function getExpires(days: number) {
  const date = new Date()
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000)
  return date.toUTCString()
}

export function setCookie(name: cookieType, value: string, expires = 31) {
  document.cookie = `${name}=${value}; expires=${getExpires(expires)}`
}

export function getCookie(name: cookieType) {
  const cookies = document.cookie.split(`;`).map((e) => e.trim())
  const cookie = cookies.find((s) => s.split(`=`)[0] === name)
  return cookie?.split(`=`)[1]
}

export function deleteCookie(name: cookieType) {
  setCookie(name, ``, -1)
}
