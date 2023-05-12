import { useContext } from 'react';
import './addToCart.scss';
import DataContext from '../../context/DataContext';

const AddToCart = () => {
  const { value, setValue, cartItems, setCartItems, addToast } = useContext(DataContext);

  const decreaseValue = () => {
    if (value > 0) {
      setValue(value - 1);
    }
  };

  const increaseValue = () => {
    setValue(value + 1);
  };

  const addToCart = () => {
    let items = cartItems;
    if (items.some((item) => (item.name = 'boots'))) {
      items.map((item) => {
        if (item.name === 'boots') item.value += value;
      });
    } else {
      items = [
        ...items,
        {
          name: 'boots',
          value: value,
        },
      ];
    }
    localStorage.setItem('cartItems', JSON.stringify(items));
    setCartItems(items);
    setValue(0);
    addToast({ type: 'success', content: 'Successfully added' });
  };

  return (
    <section className="add-to-cart">
      <section className="add-to-cart__value">
        <button className="add-to-cart__minus add-to-cart__button " onClick={decreaseValue}>
          <img src="/icon-minus.svg" alt="minus icon" />
        </button>
        <div className="add-to-cart__current-value">{value}</div>
        <button className="add-to-car__plus add-to-cart__button" onClick={increaseValue}>
          <img src="/icon-plus.svg" alt="plus icon" />
        </button>
      </section>
      <button className="add-to-cart__main-button" onClick={addToCart} disabled={value === 0}>
        <img src="/icon-cart.svg" alt="car img" />
        Add to cart
      </button>
    </section>
  );
};

export default AddToCart;
