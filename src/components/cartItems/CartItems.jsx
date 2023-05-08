import { useContext } from 'react';
import './cartItems.scss';
import DataContext from '../../context/DataContext';

const CartItems = () => {
  const { cartItems, setCartItems } = useContext(DataContext);

  const getFullPrice = (item) => {
    let value = item.value * 125.0;
    if (value % Math.floor(value) === 0) return value + '.00';
    return value;
  };

  const deleteItem = (name) => {
    let items = cartItems.filter((item) => item.name !== name);
    setCartItems(items);
    localStorage.setItem('cartItems', JSON.stringify(items));
  };

  return (
    <section className="cart-items">
      <section className="cart-items__header">Cart</section>
      {cartItems.length > 0 ? (
        <section className="cart-items__main-content">
          {cartItems.map((item, i) => (
            <section className="cart-items__product" key={i}>
              <img
                src="image-product-1-thumbnail.jpg"
                alt="boots photo"
                className="cart-items__img"
              />
              <section className="cart-items__info">
                <section className="cart-items__title">Fall Limited Edition Sneakers</section>
                <section className="cart-items__price">
                  {`$125.00 x ${item.value + ' '}`}
                  <span className="cart-items__full-price">{'$' + getFullPrice(item)}</span>
                </section>
              </section>
              <button className="cart-items__delete" onClick={() => deleteItem(item.name)}>
                <img src="/icon-delete.svg" alt="trash icon" />
              </button>
            </section>
          ))}
          <button className="cart-items__checkout">Checkout</button>
        </section>
      ) : (
        <p className="cart-items__empty">Your cart is empty.</p>
      )}
    </section>
  );
};

export default CartItems;
