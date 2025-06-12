import { getElementFromUrl } from "@/app/lib/utilServer"
import { products } from "@/db/db"
import { NextRequest, NextResponse } from "next/server"

export async function DELETE(req: NextRequest) {
  const id = Number(getElementFromUrl(req.url, `id`))

  products.deleteById(id)

  return NextResponse.json({})
}
