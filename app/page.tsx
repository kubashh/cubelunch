import { Header } from "./components/Header"
import { navigateToken } from "./lib/utilServer"

export default async function Home() {
  await navigateToken(`/`)

  return (
    <>
      <Header register login menu />

      <main className="mx-auto my-12">
        <h1 className="mx-auto mb-3 font-bold text-3xl">Witaj w CubeLunch!</h1>
        <div>Zaloguj się lub zarejestruj</div>
      </main>
    </>
  )
}
