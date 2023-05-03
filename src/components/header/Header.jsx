import Cart from "../cart/Cart"
import Nav from "../nav/Nav"
import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <img src="/logo.svg" alt="logo" className="header__logo" />
      <Nav />
      <Cart />
      <img src="/image-avatar.png" alt="profile avatar" className="header__profile" />
    </header>
  )
}

export default Header
