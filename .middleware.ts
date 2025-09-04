import { NextResponse } from "next/server"
import { getTokenFromCookies, getUserFromCookies, isLogged } from "./app/lib/utilServer"
import { CODE_ADMIN, CODE_COOK, CODE_USER, TOKEN_LENGTH } from "./app/lib/consts"
import { users } from "./db/db"

export async function middleware(req: Request) {
  // login
  const user = await getUserFromCookies()
  console.log(user)
  console.log(users.arr)
  switch (user?.rule) {
    case CODE_USER:
      return NextResponse.redirect(new URL("/store", req.url))
    case CODE_COOK:
      return NextResponse.redirect(new URL("/kitchen", req.url))
    case CODE_ADMIN:
      return NextResponse.redirect(new URL("/admin", req.url))
    default:
    // return NextResponse.redirect(new URL("/", req.url))
  }
}

export const config = {
  matcher: [`/store`, `/kitchen`, `/admin`],
}
