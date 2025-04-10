/// <reference types="vite/client" />

// PageUrlProps
type PageUrlProps = `` | `login` | `register` | `store`

// HeaderProps
type HeaderOptions = [string, () => void][]
type HeaderProps = {
  options: HeaderOptions
}

// Form
type ElementType = {
  name: string
  minLength?: number
  maxLength?: number
}
type FormProps = {
  name: string
  url: string
  elements: ElementType[]
  cb: (data: any) => void
}
