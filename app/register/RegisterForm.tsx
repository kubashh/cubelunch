"use client"

import Form from "../components/Form"
import { formValues } from "../lib/consts"
import { register } from "../actions/register"
import { redirect } from "next/navigation"

async function registerAction(formData: FormData) {
  const data = {
    username: formData.get(`username`) as string,
    password: formData.get(`password`) as string,
    email: formData.get(`email`) as string,
  }

  const res = await register(data)

  if (res) return alert(res.message)

  redirect(`login`)
}

export default function RegisterForm() {
  return (
    <Form
      name="Rejestracja"
      btnLabel="Zarejestruj"
      action={registerAction}
      elements={[formValues.username, formValues.password, formValues.email]}
      other={{
        label: "Zaloguj się",
        url: "login",
      }}
    />
  )
}
