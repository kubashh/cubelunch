import { Fragment, useRef } from "react"
import { post } from "../../lib/utils"

const inputTypeOptions = [`username`, `password`, `email`]
const getInputType = (key: string) =>
  inputTypeOptions.includes(key) ? key : `text`

export const Form = ({ name, url, elements, cb }: FormProps) => {
  const ref = useRef<HTMLFormElement | null>(null)

  let firstChild = true

  return (
    <form
      className="form"
      ref={ref}
      onSubmit={(e) => {
        e.preventDefault()
        if (!ref.current) return

        const data: any = {}

        for (const element of ref.current.getElementsByTagName(`input`)) {
          if (elements.find(({ name }) => name === element.id)) {
            data[element.id] = element.value
          }
        }

        for (const { name } of elements) {
          if (!data[name]) return alert(`${name} fild is empty`)
        }

        post(url, cb, data)
      }}
    >
      <h1>{name}</h1>
      {elements.map(({ name, minLength, maxLength }) => {
        const ch = { autoFocus: firstChild }
        firstChild = false
        return (
          <Fragment key={name}>
            <label
              htmlFor={name}
              style={{ margin: `16px 0 0 8px` }}
              children={name}
            />
            <input
              type={getInputType(name)}
              id={name}
              minLength={minLength}
              maxLength={maxLength}
              className="btn"
              required
              {...ch}
            />
          </Fragment>
        )
      })}

      <button
        type="submit"
        className="btn"
        style={{ marginTop: 32, width: `calc(100% - 32px)` }}
      >
        {name}
      </button>
    </form>
  )
}
