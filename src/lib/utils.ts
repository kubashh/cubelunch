import { adress } from "./consts"

export const post = async (
  url: string,
  cb: (data: any) => void,
  data?: any
) => {
  const response = await fetch(
    `${adress}${url}`,
    data || {
      method: `POST`,
      body: JSON.stringify(data),
    }
  )

  const resData = await response.json()

  if (response.ok) cb(resData)
}
