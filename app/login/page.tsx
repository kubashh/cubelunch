import { Header } from "../components/Header"
import { isLogged, navigate } from "../lib/utilServer"
import { LoginForm } from "./LoginForm"

export default async function Login() {
  if (await isLogged()) navigate(`store`)

  return (
    <>
      <Header />

      <main className="w-fit mx-auto">
        <LoginForm />
      </main>
    </>
  )
}
