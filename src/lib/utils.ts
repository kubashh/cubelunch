import { adress } from "./consts"

export const post = async (
  url: string,
  cb: (data: any) => void,
  data?: any
) => {
  const response = await fetch(
    `${adress}${url}`,
    data
      ? {
          method: `POST`,
          body: JSON.stringify(data),
          mode: `no-cors`,
        }
      : {
          method: `GET`,
          mode: `no-cors`,
        }
  )

  console.log(response)

  const resData = await response.json()

  console.log(resData)

  if (response.ok) cb(resData)
}
