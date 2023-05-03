import "./nav.scss"
import "../../styles/main.scss"

const Nav = () => {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__list-item">
          <a href="#">Collections</a>
        </li>
        <li className="nav__list-item">
          <a href="#">Men</a>
        </li>
        <li className="nav__list-item">
          <a href="#">Women</a>
        </li>
        <li className="nav__list-item">
          <a href="#">About</a>
        </li>
        <li className="nav__list-item">
          <a href="#">Contact</a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
