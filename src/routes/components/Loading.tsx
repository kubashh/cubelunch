import { lazy, Suspense } from "react"

export const Loading = (imp: any) => {
  const Element = lazy(() => imp)

  return <Suspense children={<Element />} />
}
