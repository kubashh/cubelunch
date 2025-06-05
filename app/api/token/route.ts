import { getToken } from "@/db/fns"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()

  if (data?.username?.length < 4 || data?.password?.length < 4) return NextResponse.json({ message: `Złe dane` })

  const token = getToken(data.username, data.password)
  if (!token) return NextResponse.json({ message: `Nie udało się zalogować, spróbuj ponownie.` })

  return NextResponse.json({ token })
}
