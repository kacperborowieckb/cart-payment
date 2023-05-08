import { useContext, useState } from 'react';
import './cart.scss';
import CartItems from '../cartItems/CartItems';
import DataContext from '../../context/DataContext';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cartItems } = useContext(DataContext);

  const getValue = () => {
    return cartItems.reduce((a, item) => a + item.value, 0);
  };

  return (
    <section className="cart">
      <img src="/icon-cart.svg" alt="icon-cart" onClick={() => setIsOpen(!isOpen)} />
      {cartItems.length > 0 && <div className="cart__value">{getValue()}</div>}
      {isOpen && <CartItems />}
    </section>
  );
};

export default Cart;
