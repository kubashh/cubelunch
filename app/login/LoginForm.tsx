"use client"

import Form from "../components/Form"
import { formValues } from "../lib/consts"
import { setCookie } from "../lib/utilClient"
import { token } from "../actions/token"

async function login(formData: FormData) {
  const data = {
    username: formData.get(`username`) as string,
    password: formData.get(`password`) as string,
  }

  const res = await token(data)

  if (!res.token) return alert(res.message)

  setCookie(`token`, res.token)
}

export default function LoginForm() {
  return (
    <Form
      name="Login"
      btnLabel="Zaloguj"
      action={login}
      elements={[formValues.username, formValues.password]}
      other={{
        label: "Zarejestruj się",
        url: "register",
      }}
    />
  )
}
