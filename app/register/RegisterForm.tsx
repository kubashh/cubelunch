"use client"

import { useRouter } from "next/navigation"
import Form from "../components/Form"
import { formValues } from "../lib/consts"

export default function RegisterForm() {
  const router = useRouter()
  return (
    <Form
      name="Rejestracja"
      btnLabel="Zarejestruj"
      url="register"
      elements={[formValues.username, formValues.password, formValues.email]}
      cb={(data) => {
        if (!data.success) return data.message && alert(data.message)

        router.push(`login`)
      }}
      other={{
        label: "Zaloguj się",
        url: "login",
      }}
    />
  )
}
