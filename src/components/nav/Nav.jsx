import './nav.scss';
import '../../styles/main.scss';

const Nav = ({ isNavOpen, setIsNavOpen }) => {
  return (
    <nav className="nav" style={{ transform: isNavOpen && 'translateX(100%)' }}>
      {isNavOpen && <div className="nav__background"></div>}
      <button className="nav__close" onClick={() => setIsNavOpen(false)}>
        <img src="/icon-close.svg" alt="Close button" />
      </button>
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
  );
};

export default Nav;
