import Link from "next/link"
import { post } from "../lib/utilClient"

function Input(props: FormInputType) {
  return (
    <input
      type={props.type}
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

export default function Form({ name, btnLabel, url, elements, cb, other }: FormProps) {
  let firstChild = true

  return (
    <form
      id="form"
      className="w-fit px-6 pt-6 rounded-2xl bg-zinc-800 flex flex-col"
      onSubmit={(e) => {
        e.preventDefault()
        const ref = document.getElementById(`form`)
        if (!ref) return

        const data: any = {}

        for (const element of ref.getElementsByTagName(`input`)) {
          if (elements.find((e) => e.type === element.id)) {
            data[element.id] = element.value
          }
        }

        post(url, cb, data)
      }}
    >
      <h1 className="mb-3 text-3xl">{name}</h1>

      {elements.map((element) => {
        const ch = firstChild
        firstChild = false
        return <Input key={element.name} {...element} autoFocus={ch} />
      })}

      <button
        type="submit"
        className="mx-auto mt-4 border-2 border-zinc-950 py-1 text-xl rounded-xl cursor-pointer"
        style={{ width: `calc(100% - 32px)` }}
      >
        {btnLabel}
      </button>
      <Link href={other.url} className="mt-5 mb-2.5 ml-auto">
        {other.label}
      </Link>
    </form>
  )
}
