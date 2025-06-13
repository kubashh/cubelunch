"use client"

import { changeUserRule, deleteUser } from "../actions/admin"
import { CODE_ADMIN, CODE_COOK, CODE_USER } from "../lib/consts"

export default function UserElement({ name, email, id, rule }: User) {
  return (
    <form className="mb-[4px] border-t-4 border-zinc-900 p-2 grid grid-cols-4">
      <span>{name}</span>
      <span>{email}</span>
      <select
        defaultValue={rule}
        className="cursor-pointer"
        onChange={async ({ target }) => {
          await changeUserRule(id, Number(target.value))
        }}
      >
        <option value={CODE_USER}>Klient</option>
        <option value={CODE_COOK}>Kucharz</option>
        <option value={CODE_ADMIN}>Admin</option>
      </select>
      <button
        type="button"
        className="cursor-pointer"
        onClick={async () => {
          await deleteUser(id)
          location.reload()
        }}
      >
        Usuń
      </button>
    </form>
  )
}
