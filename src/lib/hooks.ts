import { useEffect, useState } from "react"
import { post } from "./utils"

export const useRefresh = () => {
  const setState = useState(false)[1]
  return () => setState((prev) => !prev)
}

export const loadData = (path: string) => {
  const [data, setData] = useState<any | null>(null)

  useEffect(() => {
    post(path, (data) => {
      setData(data)
    })
  }, [])

  return data
}
