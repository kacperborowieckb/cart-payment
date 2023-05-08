import { useContext, useEffect, useState } from 'react';
import Cart from '../cart/Cart';
import Nav from '../nav/Nav';
import './header.scss';
import DataContext from '../../context/DataContext';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const { isCartOpen, setIsCartOpen } = useContext(DataContext);

  const openNav = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
    }
    setIsNavOpen(true);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 768) {
        setIsNavOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  });

  return (
    <header className="header">
      <img src="/icon-menu.svg" alt="Menu icon" onClick={openNav} className="header__open" />
      <div className="header__logo-container">
        <img src="/logo.svg" alt="logo" className="header__logo" />
      </div>
      <Nav isNavOpen={isNavOpen} setIsNavOpen={setIsNavOpen} />
      <Cart />
      <img src="/image-avatar.png" alt="profile avatar" className="header__profile" />
    </header>
  );
};

export default Header;
