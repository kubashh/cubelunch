import Link from "next/link"
import { formValues, formValuesEmail } from "../lib/consts"

function Input(props: LRFormInputProps) {
  return (
    <input
      type={props.type}
      name={props.type}
      placeholder={props.name}
      id={props.type}
      minLength={4}
      maxLength={32}
      className="text-lg mx-4 my-3 px-3 py-1.5 rounded-xl outline-2 outline-zinc-950 user-invalid:outline-red-500 user-valid:outline-green-600"
      required
      {...{ autoFocus: props.autoFocus }}
    />
  )
}

export default function LRForm({ action, login }: LRFormProps) {
  let firstChild = true

  return (
    <form className="w-fit px-6 pt-6 rounded-2xl bg-zinc-800 flex flex-col" action={action}>
      <h1 className="mb-3 text-3xl">{login ? `Login` : `Rejestracja`}</h1>

      {(login ? formValues : formValuesEmail).map((element) => {
        const ch = firstChild
        firstChild = false
        return <Input key={element.name} {...element} autoFocus={ch} />
      })}

      <button
        type="submit"
        className="mx-auto mt-4 border-2 border-zinc-950 py-1 text-xl rounded-xl cursor-pointer"
        style={{ width: `calc(100% - 32px)` }}
      >
        {login ? `Zaloguj` : `Zarejestruj`}
      </button>
      <Link href={login ? `register` : `login`} className="mt-5 mb-2.5 ml-auto">
        {login ? `Zarejestruj się` : `Zaloguj się`}
      </Link>
    </form>
  )
}
