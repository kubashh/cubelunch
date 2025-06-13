"use client"

import { register } from "../actions/user"
import LRForm from "../components/LRForm"
import { redirect } from "next/navigation"

async function registerAction(formData: FormData) {
  const data = {
    name: formData.get(`username`) as string,
    password: formData.get(`password`) as string,
    email: formData.get(`email`) as string,
  }

  const res = await register(data)

  if (res) return alert(res.message)

  redirect(`login`)
}

export default function RegisterForm() {
  return <LRForm action={registerAction} />
}
