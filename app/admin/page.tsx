import Header from "../components/Header"
import AdminPage from "./AdminPage"
import { navigateToken } from "../lib/utilServer"

export default async function Admin() {
  await navigateToken(`admin`)

  return (
    <>
      <Header logout />
      <AdminPage />
    </>
  )
}
