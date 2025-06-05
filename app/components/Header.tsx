import Link from "next/link"
import { Logout } from "./Logout"

function HeaderLink({ label, url }: HeaderLinkType) {
  return typeof label === `string` ? (
    <Link className="h-6 mx-4 my-2 text-6 float-right justify-self-center" href={url}>
      {label}
    </Link>
  ) : (
    label
  )
}

export function Header({ menu, login, register, logout }: HeaderProps) {
  return (
    <header className="w-screen h-10">
      <span className="bg-(image:--cubeLunchLogo) h-10 w-50 float-left" />

      {logout && <HeaderLink url="login" label={<Logout />} />}
      {register && <HeaderLink url="register" label="Register" />}
      {login && <HeaderLink url="login" label="Login" />}
      {menu && <HeaderLink url="/" label="Menu" />}
    </header>
  )
}
