"use server"

import { setUser } from "@/db/fns"

function isUserValid(user: registerProps) {
  if (user.username.length < 4) return false
  if (user.password.length < 4) return false
  if (user.email.length < 4) return false
  return true
}

export async function register(data: registerProps) {
  if (!isUserValid(data)) return { message: `Złe dane!` }

  return setUser(data)
}

// export async function getStaticProps() {
//   const fs = await import("fs")
//   const data = fs.Dir
//   console.log(data)
// }
