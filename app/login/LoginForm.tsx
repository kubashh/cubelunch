"use client"

import { Form } from "../components/Form"
import { formValues } from "../lib/consts"
import { setCookie } from "../lib/util"

export function LoginForm() {
  return (
    <Form
      name="Login"
      btnLabel="Zaloguj"
      url="token"
      elements={[formValues.username, formValues.password]}
      cb={(data) => {
        if (!data.token) return

        setCookie(`token`, data.token)

        location.href = `store`
      }}
      other={{
        label: "Zarejestruj się",
        url: "register",
      }}
    />
  )
}
