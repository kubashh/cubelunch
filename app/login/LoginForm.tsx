"use client"

import LRForm from "../components/LRForm"
import { setCookie } from "../lib/utilClient"
import { navigateByRule } from "../lib/util"
import { token } from "../actions/user"

async function login(formData: FormData) {
  const data = {
    name: formData.get(`username`) as string,
    password: formData.get(`password`) as string,
  }

  const res = await token(data)

  if (!res.token || !res.rule) return alert(res.message)

  setCookie(`token`, res.token)

  navigateByRule(res.rule, `login`)
}

export default function LoginForm() {
  return <LRForm action={login} login />
}
