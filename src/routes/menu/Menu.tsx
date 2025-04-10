import { headerOptions } from "../../lib/consts"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

export default () => {
  return (
    <div style={{ margin: `auto` }}>
      <Header options={headerOptions} />

      <h1 style={{ margin: 32 }}>Welcome to CubeLunch!</h1>
      <div>Login or Register</div>

      <Footer />
    </div>
  )
}
