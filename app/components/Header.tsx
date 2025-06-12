import Link from "next/link"
import Logout from "./Logout"
import Logo from "./Logo"

function HeaderLink({ label, url }: HeaderLinkProps) {
  return (
    <Link className="h-6 mx-4 my-2 text-6 float-right justify-self-center" href={url}>
      {label}
    </Link>
  )
}

export default function Header({ logout, menu }: HeaderProps) {
  return (
    <header className="w-screen h-10">
      <Logo />

      {logout && <Logout />}
      {menu && <HeaderLink url="/" label="Menu" />}
    </header>
  )
}
