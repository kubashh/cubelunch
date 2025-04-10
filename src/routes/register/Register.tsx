import { setRoute } from "../../App"
import { formValues, headerOptions } from "../../lib/consts"
import { Footer } from "../components/Footer"
import { Form } from "../components/Form"
import { Header } from "../components/Header"

export default () => (
  <>
    <Header options={headerOptions} />
    <Form
      name="Register"
      url="register"
      elements={[formValues.username, formValues.password, formValues.email]}
      cb={(data) => {
        if (!data.success) return

        setRoute(`store`)
      }}
    />
    <Footer />
  </>
)
