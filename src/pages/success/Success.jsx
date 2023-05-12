import { useContext, useEffect } from 'react';
import './success.scss';
import DataContext from '../../context/DataContext';
import { Link } from 'react-router-dom';

const Succes = () => {
  const { setCartItems } = useContext(DataContext);

  useEffect(() => {
    setCartItems([]);
    localStorage.setItem('cartItems', JSON.stringify([]));
  }, []);

  return (
    <div className="success">
      <h1 className="success__header">Success!</h1>
      <Link to={'/'}>
        <button className="success__button">Go Home</button>
      </Link>
    </div>
  );
};

export default Succes;
