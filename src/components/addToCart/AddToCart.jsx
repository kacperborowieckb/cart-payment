import "./addToCart.scss"

const AddToCart = () => {
  return (
    <section className="add-to-cart">
      <section className="add-to-cart__value">
        <button className="add-to-cart__minus add-to-cart__button ">
          <img src="/icon-minus.svg" alt="minus icon" />
        </button>
        <div className="add-to-cart__current-value">0</div>
        <button className="add-to-car__plus add-to-cart__button">
          <img src="/icon-plus.svg" alt="plus icon" />
        </button>
      </section>
      <button className="add-to-cart__main-button">
        <img src="/icon-cart.svg" alt="car img" />
        Add to cart
      </button>
    </section>
  )
}

export default AddToCart
