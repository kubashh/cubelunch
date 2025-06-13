"use client"

import NextImage from "next/image"
import { useRefresh } from "../lib/hooks"

export default function ImageGrabber({ src, cb }: ImageGrabberProps) {
  const refresh = useRefresh()
  return (
    <div className="flex">
      <NextImage className="mr-2" width="40" height="40" src={src} alt="obraz" />
      <input
        type="file"
        className="cursor-pointer"
        onChange={({ target }) => {
          if (!target.files) return
          configureImage(target.files[0], cb)
          setTimeout(() => refresh(), 1000)
        }}
      />
    </div>
  )
}

const MAX_CHARS = 98000
const IMAGE_SIZE = 400

export function configureImage(image: File, cb: ImageGrabberCbType) {
  imgToSrc(image, (src) => {
    resizeScrImage(src, (src) => {
      console.log(`Before: ${src.length}`)
      optymalizeSrc(src, (src) => {
        console.log(`After: ${src.length}`)
        cb(src)
      })
    })
  })
}

function imgToSrc(image: File, callback: ImageGrabberCbType) {
  const reader = new FileReader()

  reader.onload = () => {
    const src = String(reader.result)
    callback(src)
  }

  reader.readAsDataURL(image)
}

function resizeScrImage(src: string, callback: ImageGrabberCbType) {
  const canvas = document.createElement(`canvas`)
  canvas.width = IMAGE_SIZE
  canvas.height = IMAGE_SIZE
  const ctx = canvas.getContext(`2d`)
  if (!ctx) return alert(`No ctx`)

  const image = new Image()

  image.onload = () => {
    let width = image.width
    let height = image.height

    const aspectRatio = width / height

    let newWidth = IMAGE_SIZE
    let newHeight = IMAGE_SIZE

    if (width > height) {
      newWidth *= aspectRatio
    } else {
      newHeight *= aspectRatio
    }

    let [x, y] = [0, 0]

    if (width > height) {
      x = (IMAGE_SIZE - newWidth) / 2
    } else {
      y = (IMAGE_SIZE - newHeight) / 2
    }

    console.log(x, y)

    ctx.drawImage(image, 0, 0, width, height, x, y, newWidth, newHeight)
    const newSrc = canvas.toDataURL()

    callback(newSrc)
  }

  image.src = src
}

function optymalizeSrc(src: string, callback: ImageGrabberCbType) {
  if (src.length < MAX_CHARS) return callback(src)

  const imageElement = new Image()

  imageElement.onload = () => optymalizeImage(imageElement, callback)

  imageElement.src = src
}

function optymalizeImage(imageElement: HTMLImageElement, callback: ImageGrabberCbType) {
  const canvas = document.createElement(`canvas`)
  canvas.width = imageElement.width
  canvas.height = imageElement.height

  const ctx = canvas.getContext(`2d`)
  if (!ctx) return alert(`No ctx`)
  ctx.drawImage(imageElement, 0, 0, imageElement.width, imageElement.height)

  for (let i = 0.96; i > 0; i -= 0.02) {
    const newSrc = canvas.toDataURL(`image/jpeg`, i)

    if (newSrc.length < MAX_CHARS) {
      return callback(newSrc)
    }
  }
}
