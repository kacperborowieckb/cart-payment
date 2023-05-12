import { useContext, useEffect, useRef } from 'react';
import './cart.scss';
import CartItems from '../cartItems/CartItems';
import DataContext from '../../context/DataContext';

const Cart = () => {
  const { cartItems, isCartOpen, setIsCartOpen } = useContext(DataContext);
  const cart = useRef();
  const getValue = () => {
    return cartItems.reduce((a, item) => a + item.value, 0);
  };

  useEffect(() => {
    const closeCart = (e) => {
      if (
        !e.target.className.includes('cart') &&
        !e.target.className.includes('cart-items') &&
        !e.target.className.includes('checkout-button')
      ) {
        setIsCartOpen(false);
      }
    };
    window.addEventListener('click', closeCart);

    return () => window.removeEventListener('click', closeCart);
  }, []);

  return (
    <section className="cart" ref={cart}>
      <img
        src="/icon-cart.svg"
        alt="icon-cart"
        onClick={() => setIsCartOpen(!isCartOpen)}
        className="cart__icon"
      />
      {cartItems.length > 0 && <div className="cart__value">{getValue()}</div>}
      {isCartOpen && <CartItems />}
    </section>
  );
};

export default Cart;
