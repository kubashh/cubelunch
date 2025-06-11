// Backend
type User = {
  username: string
  passwordHash: string
  email: string
  token: string
  rule: number
  cart: string[]
}

type Product = {
  id: number
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
  logout?: boolean
}

type HeaderLinkType = {
  label: any
  url: string
}

type cookieType = `token`

type urlType = `/` | `login` | `register` | `store` | `kitchen` | `admin`

type Obj<T> = { [key: string]: T }
