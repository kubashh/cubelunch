import { NextResponse } from "next/server"
import { getTokenFromCookies, getUserFromCookies, isLogged } from "./app/lib/utilServer"
import { CODE_ADMIN, CODE_COOK, CODE_USER, TOKEN_LENGTH } from "./app/lib/consts"

export async function middleware(req: Request) {
  if (await isLogged()) {
    // login
    const token = await getTokenFromCookies()
    const user = await getUserFromCookies()
    if (token?.length !== TOKEN_LENGTH) return NextResponse.redirect(`/`)

    switch (user?.rule) {
      case CODE_USER:
        return NextResponse.redirect(`/store`)
      case CODE_COOK:
        return NextResponse.redirect(`/kitchen`)
      case CODE_ADMIN:
        return NextResponse.redirect(`/store`)
      default:
        return NextResponse.redirect(`/`)
    }
  }

  return NextResponse.redirect(`/`)
}

export const config = {
  matcher: [`/store`, `/kitchen`, `/admin`],
}
