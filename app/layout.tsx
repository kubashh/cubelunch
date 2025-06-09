import type { Metadata } from "next"
import "./globals.css"
import Footer from "./components/Footer"

export const metadata: Metadata = {
  title: "CubeLunch",
  description: "CubeLunch",
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="bg-black text-blue-50 flex flex-col">
        {children}
        <Footer />
      </body>
    </html>
  )
}
