import { TOKEN_LENGTH } from "@/app/lib/consts"
import { navigate } from "@/app/lib/utilServer"
import { getUserByToken } from "@/db/fns"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()
  console.log(data)
  if (data?.token?.length! == TOKEN_LENGTH) return NextResponse.json({ message: `Nie ma tokena` })

  const user = getUserByToken(data.token)
  if (!user) return NextResponse.json({ message: `Nie udało się zalogować, nie ma takiego tokena.` })

  switch (user.rule) {
    case 1:
      navigate(`store`)
    case 2:
      navigate(`kitchen`)
    case 3:
      navigate(`admin`)
    default:
      navigate(`/`)
  }
}
