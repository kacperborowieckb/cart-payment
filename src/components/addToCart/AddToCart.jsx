import { useState } from 'react';
import './addToCart.scss';

const AddToCart = () => {
  const [value, setValue] = useState(0);

  const removeFromCart = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const addToCart = () => {
    setValue(value + 1);
  };

  return (
    <section className="add-to-cart">
      <section className="add-to-cart__value">
        <button className="add-to-cart__minus add-to-cart__button " onClick={removeFromCart}>
          <img src="/icon-minus.svg" alt="minus icon" />
        </button>
        <div className="add-to-cart__current-value">{value}</div>
        <button className="add-to-car__plus add-to-cart__button" onClick={addToCart}>
          <img src="/icon-plus.svg" alt="plus icon" />
        </button>
      </section>
      <button className="add-to-cart__main-button">
        <img src="/icon-cart.svg" alt="car img" />
        Add to cart
      </button>
    </section>
  );
};

export default AddToCart;
