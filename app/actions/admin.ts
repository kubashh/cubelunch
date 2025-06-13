"use server"

import { users } from "@/db/db"

export async function changeUserRule(id: number, newRule: number) {
  const user = users.getById(id)
  if (!user) return

  user.rule = newRule
  users.createById(id, user)
}

export async function deleteUser(id: number) {
  users.deleteById(id)
}
