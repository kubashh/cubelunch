"use client"

import { Form } from "../components/Form"
import { formValues } from "../lib/consts"

export function RegisterForm() {
  return (
    <Form
      name="Rejestracja"
      btnLabel="Zarejestruj"
      url="register"
      elements={[formValues.username, formValues.password, formValues.email]}
      cb={(data) => {
        if (!data.success) return alert(data.message)

        location.href = `store`
      }}
      other={{
        label: "Zaloguj się",
        url: "login",
      }}
    />
  )
}
