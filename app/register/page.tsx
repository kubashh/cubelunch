import Header from "../components/Header"
import RegisterForm from "./RegisterForm"
import { isLogged, navigate } from "../lib/utilServer"

export default async function Register() {
  if (await isLogged()) navigate(`store`)

  return (
    <>
      <Header />

      <main className="w-fit mx-auto">
        <RegisterForm />
      </main>
    </>
  )
}
