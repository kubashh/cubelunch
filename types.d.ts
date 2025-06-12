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

type tokenProps = {
  username: string
  password: string
}

type registerProps = {
  username: string
  password: string
  email: string
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
  action: (formData: FormData) => void | Promise<void>
  elements: { name: string; type: string }[]
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
