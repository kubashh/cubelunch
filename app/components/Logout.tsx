"use client"

import Link from "next/link"
import { deleteCookie } from "../lib/util"

function logout() {
  deleteCookie(`token`)
}

export function Logout() {
  return (
    <span className="h-6 mx-4 my-2 text-6 float-right justify-self-center" onClick={logout}>
      <Link href="login">Wyloguj</Link>
    </span>
  )
}
