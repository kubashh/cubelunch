import UserElement from "./UserElement"
import { getUsers } from "@/app/actions/getAction"

export default async function AdminPage() {
  const users = await getUsers()
  return (
    <>
      <div className="my-3 p-2 grid grid-cols-4 font-bold">
        <span>Nazwa</span>
        <span>Email</span>
        <span>Rola</span>
      </div>
      {users.map((u) => (
        <UserElement key={u.id} {...u} />
      ))}
    </>
  )
}
