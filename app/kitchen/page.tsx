import Header from "../components/Header"
import KitchenPage from "./KitchenPage"
import { navigateToken } from "../lib/utilServer"

export default async function Kitchen() {
  await navigateToken(`kitchen`)

  return (
    <>
      <Header logout />
      <KitchenPage />
    </>
  )
}
