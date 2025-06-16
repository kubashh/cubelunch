/// <reference types="next" />
/// <reference types="next/image-types/global" />

// Backend
type User = {
  id: number
  name: string
  passwordHash: string
  email: string
  token: string
  rule: number
  cart: string[]
}

type Product = {
  id: number
  name: string
  cost: string
  img: string
}

type TokenProps = {
  name: string
  password: string
}

type RegisterProps = {
  name: string
  password: string
  email: string
}

// Frontend
type LRFormInputProps = {
  name: string
  type: string
  autoFocus: boolean
}

type LRFormProps = {
  action: (formData: FormData) => void | Promise<void>
  login?: boolean
}

type HeaderProps = {
  logout?: boolean
  menu?: boolean
}

type HeaderLinkProps = {
  label: string
  url: string
}

type ImageGrabberCbType = (data: string) => void

type ImageGrabberProps = {
  src: string
  cb: ImageGrabberCbType
  id: number
}

type CookieType = `token`

type UrlType = `/` | `login` | `register` | `store` | `kitchen` | `admin`

type Obj<T> = { [key: string]: T }
