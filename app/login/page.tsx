import Header from "../components/Header"
import LoginForm from "./LoginForm"
import { navigateToken } from "../lib/utilServer"

export default async function Login() {
  await navigateToken(`login`)

  return (
    <>
      <Header />

      <main className="w-fit mx-auto">
        <LoginForm />
      </main>
    </>
  )
}
