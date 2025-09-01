"use client"

import { redirect } from "next/navigation"
import LRForm from "../components/LRForm"
import { register } from "../actions/user"

async function registerAction(formData: FormData) {
  const data = {
    name: formData.get(`username`) as string,
    password: formData.get(`password`) as string,
    email: formData.get(`email`) as string,
  }

  const res = await register(data)

  if (res) return alert(res)

  redirect(`login`)
}

export default function RegisterForm() {
  return <LRForm action={registerAction} />
}
