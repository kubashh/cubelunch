import { Header } from "../components/Header"
import { isLogged, navigate } from "../lib/utilServer"
import { RegisterForm } from "./RegisterForm"

export default async function Register() {
  if (await isLogged()) navigate(`store`)

  return (
    <>
      <Header menu />

      <main className="w-fit mx-auto">
        <RegisterForm />
      </main>
    </>
  )
}
