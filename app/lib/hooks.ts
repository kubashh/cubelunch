import { useState } from "react"

export function useRefresh() {
  const refresh = useState(false)[1]
  return () => refresh((prev) => !prev)
}
