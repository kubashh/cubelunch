"use client"

import Form from "../components/Form"
import { formValues } from "../lib/consts"
import { setCookie } from "../lib/utilClient"

export default function LoginForm() {
  return (
    <Form
      name="Login"
      btnLabel="Zaloguj"
      url="token"
      elements={[formValues.username, formValues.password]}
      cb={(data) => {
        if (!data.token) return data.message && alert(data.message)

        setCookie(`token`, data.token)

        location.reload()
      }}
      other={{
        label: "Zarejestruj się",
        url: "register",
      }}
    />
  )
}
