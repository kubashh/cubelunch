"use client"

import { useRouter } from "next/navigation"
import Logo from "./Logo"

export default function LogoButton() {
  const router = useRouter()
  return (
    <button className="cursor-pointer" onClick={() => router.push(`/`)}>
      <Logo />
    </button>
  )
}
