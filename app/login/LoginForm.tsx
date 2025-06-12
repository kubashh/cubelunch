"use client"

import LRForm from "../components/LRForm"
import { setCookie } from "../lib/utilClient"
import { token } from "../actions/token"

async function login(formData: FormData) {
  const data = {
    name: formData.get(`username`) as string,
    password: formData.get(`password`) as string,
  }

  const res = await token(data)

  if (!res.token) return alert(res.message)

  setCookie(`token`, res.token)

  location.reload()
}

export default function LoginForm() {
  return <LRForm action={login} login />
}
