import Link from "next/link"
import Header from "./components/Header"
import { navigateToken } from "./lib/utilServer"

function HomeLink({ url, label }: HeaderLinkType) {
  return (
    <Link className="mx-auto my-4 text-2xl" href={url}>
      {label}
    </Link>
  )
}

export default async function Home() {
  await navigateToken(`/`)

  return (
    <>
      <Header />

      <main className="mx-auto my-12">
        <h1 className="mx-auto mb-6 font-bold text-3xl">Witaj w CubeLunch!</h1>

        <HomeLink url="login" label="Zaloguj się" />
        <span className="mx-8 text-2xl">lub</span>
        <HomeLink url="register" label="Zarejestruj się" />
      </main>
    </>
  )
}
