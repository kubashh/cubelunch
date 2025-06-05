import { setUser } from "@/db/fns"
import { NextRequest, NextResponse } from "next/server"

export async function POST(req: NextRequest) {
  const data = await req.json()

  const ret = setUser(data)

  return NextResponse.json(ret)
}

export async function getStaticProps() {
  const fs = await import("fs")
  const data = fs.Dir
  console.log(data)
}
