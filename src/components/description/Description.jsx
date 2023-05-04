import AddToCart from "../addToCart/AddToCart"
import "./description.scss"

const Description = () => {
  return (
    <article className="description">
      <h2 className="description__company">Sneaker Company</h2>
      <h1 className="description__title">Fall Limited Edition Sneakers</h1>
      <p className="description__desc">These low-profile sneakers are perfect casual wear companion. Featuring a durable rubber outer sole, they'll withstand everything the weather can offer</p>
      <section className="description__price-section">
        <div className="description__price">
          <div className="description__current-price">$125.00</div>
          <div className="description__discount">50%</div>
        </div>
        <div className="description__old-price" aria-label="Old price:">
          $250.00
        </div>
      </section>
      <AddToCart />
    </article>
  )
}

export default Description
