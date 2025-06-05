// Backend
type User = {
  username: string
  passwordHash: string
  email: string
  token: string
  rule: number
}

type Product = {
  label: string
  cost: string
  img: string
}

// Frontend
type FormInputType = {
  name: string
  type: string
  autoFocus: boolean
}

type FormProps = {
  name: string
  btnLabel: string
  url: string
  elements: { name: string; type: string }[]
  cb: (arg: any) => void
  other: {
    label: string
    url: string
  }
}

type User = {
  name: string
  password: string
}

type HeaderProps = {
  menu?: boolean
  login?: boolean
  register?: boolean
  logout?: boolean
}

type HeaderLinkType = {
  label: any
  url: string
}

type cookieType = `token`

type urlType = `/` | `login` | `register` | `store` | `kitchen` | `admin`
