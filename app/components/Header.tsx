import Link from "next/link"
import Logout from "./Logout"
import { Logo } from "./Logo"

function HeaderLink({ label, url }: HeaderLinkType) {
  return typeof label === `string` ? (
    <Link className="h-6 mx-4 my-2 text-6 float-right justify-self-center" href={url}>
      {label}
    </Link>
  ) : (
    label
  )
}

export default function Header({ logout }: HeaderProps) {
  return (
    <header className="w-screen h-10">
      <Logo />

      {logout && <HeaderLink url="login" label={<Logout />} />}
    </header>
  )
}
