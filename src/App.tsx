import { useState } from "react"
import { Loading } from "./routes/components/Loading.tsx"

export let setRoute = (arg: PageUrlProps) => console.log(arg)

const useRouter = () => {
  const [pageUrl, setPageUrl] = useState<PageUrlProps>(``)
  setRoute = setPageUrl

  return pageUrl
}

export const App = () => {
  const pageUrl = useRouter()

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
