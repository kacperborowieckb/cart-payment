import { useContext, useEffect } from 'react';
import './success.scss';
import DataContext from '../../context/DataContext';

const Succes = () => {
  const { setCartItems } = useContext(DataContext);

  useEffect(() => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  }, []);

  return <div>Succes</div>;
};

export default Succes;
