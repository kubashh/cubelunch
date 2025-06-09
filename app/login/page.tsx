import Header from "../components/Header"
import LoginForm from "./LoginForm"
import { isLogged, navigate } from "../lib/utilServer"

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
