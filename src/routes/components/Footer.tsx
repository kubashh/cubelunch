import { createPortal } from "react-dom"

export const Footer = () =>
  createPortal(
    <footer>
      <hr className="footerHr" />
      <span className="footerLogo" />
    </footer>,
    document.body
  )
