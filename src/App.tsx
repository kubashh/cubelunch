import { useState } from "react"
import { Loading } from "./routes/components/Loading.tsx"

type RouterType = {
  pageUrl: any
  setUrl: any // (arg: PageUrlProps) => void
}

const router: RouterType = {
  pageUrl: null,
  setUrl: null,
}

const useRouter = () => {
  const [pageUrl, setPageUrl] = useState<PageUrlProps>(``)
  router.setUrl = setPageUrl

  if (pageUrl === router.pageUrl) return null
  router.pageUrl = pageUrl

  return pageUrl
}

export const setRoute = (url: PageUrlProps) => {
  console.log(router, url)
  router.setUrl(url)
}

export const Route = () => {
  const pageUrl = useRouter()
  if (pageUrl === null) {
    console.error(`jjjjj`)
  }
  console.log(`Render Route`)

  switch (pageUrl) {
    case `login`:
      return Loading(import("./routes/login/Login.tsx"))
    case `register`:
      return Loading(import("./routes/register/Register"))
    case `store`:
      return Loading(import("./routes/store/Store"))
  }

  return Loading(import("./routes/menu/Menu"))
}

export const App = () => <Route />
