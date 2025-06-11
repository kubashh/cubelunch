import Header from "../components/Header"
import RegisterForm from "./RegisterForm"
import { navigateToken } from "../lib/utilServer"

export default async function Register() {
  await navigateToken(`register`)

  return (
    <>
      <Header />

      <main className="w-fit mx-auto">
        <RegisterForm />
      </main>
    </>
  )
}
