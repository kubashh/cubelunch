import { NextResponse } from "next/server"

export function DELATE() {
  return NextResponse.json({
    message: `Admin panel`,
  })
}
