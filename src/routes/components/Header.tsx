import { createPortal } from "react-dom"

export const Header = ({ options }: HeaderProps) =>
  createPortal(
    <header
      style={{
        display: `flex`,
        justifyContent: `space-between`,
        userSelect: `none`,
      }}
    >
      <span className="headerLogo" />
      <div>
        {options.map((option) => (
          <button className="btn" key={option[0]} onClick={option[1]}>
            {option[0]}
          </button>
        ))}
      </div>
    </header>,
    document.body
  )
