import { headerOptions } from "../../lib/consts"
import { loadData } from "../../lib/hooks"
import { Footer } from "../components/Footer"
import { Header } from "../components/Header"

type ProductProps = {
  name: string
  cost: number
  img: { alt: string; src: any }
}

const Product = ({ name, cost, img }: ProductProps) => (
  <div
    style={{
      width: 204,
      // height: 300,
      borderRadius: 16,
      background: `linear-gradient(#333, black)`,
      border: `2px solid gray`,
      boxShadow: `10px 5px 8px #222`,
    }}
  >
    <div
      style={{
        display: `flex`,
        borderRadius: `16px 16px 0 0`,
        background: `linear-gradient(#666, #333)`,
      }}
    >
      <div style={{ margin: `3px 6px`, background: `inherit` }}>{name}</div>
      <div style={{ margin: `3px 6px`, background: `inherit` }}>{cost}zł</div>
    </div>
    <div style={{ width: 200, height: 200 }}>
      <img
        style={{
          margin: `0 auto`,
          width: 200,
          height: 200,
          backgroundColor: `#333`,
          borderTop: `2px solid gray`,
        }}
        alt={img.alt}
        src={img.src}
      />
    </div>

    <button
      className="btn"
      style={{
        position: `relative`,
        margin: 0,
        width: `100%`,
        inset: 0,
        border: 0,
        borderRadius: `0 0 16px 16px`,
        borderTop: `2px solid gray`,
        background: `linear-gradient(#333, black)`,
      }}
    >
      Add to card
    </button>
  </div>
)

const Products = () => {
  const products = loadData(`products.json`)

  return Array.isArray(products) ? (
    <div
      style={{
        display: `grid`,
        gridTemplateColumns: `repeat(auto-fit, 200px)`,
        gap: 32,
        justifyContent: `center`,
      }}
      children={products.map((element) => (
        <Product key={element.name} {...element} />
      ))}
    />
  ) : (
    `Loading...`
  )
}

export default () => (
  <div style={{ width: `100vw` }}>
    <Header options={headerOptions} />

    <h1>Store</h1>
    <Products />

    <Footer />
  </div>
)
