export const TOKEN_LENGTH = 32
export const CHARSET = `qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM12345567890`

export const CODE_USER = 1
export const CODE_COOK = 2
export const CODE_ADMIN = 3

export const formValues = [
  { name: `Login`, type: `username` },
  { name: `Hasło`, type: `password` },
]
export const formValuesEmail = [...formValues, { name: `Email`, type: `email` }]
