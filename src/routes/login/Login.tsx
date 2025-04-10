import { setRoute } from "../../App"
import { formValues, headerOptions } from "../../lib/consts"
import { Footer } from "../components/Footer"
import { Form } from "../components/Form"
import { Header } from "../components/Header"

export default () => (
  <>
    <Header options={headerOptions} />
    <Form
      name="Login"
      url="login"
      elements={[formValues.username, formValues.password]}
      cb={(data) => {
        if (!data.success) return

        console.log(data)
        setRoute(`store`)
      }}
    />
    <Footer />
  </>
)
