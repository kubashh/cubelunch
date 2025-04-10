import { setRoute } from "../App"

export const adress = `http://localhost:5173/cubelunch/`

export const formValues = {
  username: { name: `username`, minLength: 4, maxLength: 32 },
  password: { name: `password`, minLength: 4, maxLength: 32 },
  email: { name: `email`, minLength: 4, maxLength: 32 },
}

export const headerOptions: HeaderOptions = [
  [`menu`, () => setRoute(``)],
  [`login`, () => setRoute(`login`)],
  [`register`, () => setRoute(`register`)],
]
