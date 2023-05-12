import { useContext, useState } from 'react';
import './checkoutButton.scss';
import { loadStripe } from '@stripe/stripe-js';
import DataContext from '../../context/DataContext';

const CheckoutButton = ({ cartItems }) => {
  const [isLoading, setIsLoading] = useState(false);
  const { addToast } = useContext(DataContext);

  const product = {
    price: import.meta.env.VITE_PRICE_KEY,
    quantity: cartItems[0].value,
  };

  const checkoutOptions = {
    lineItems: [product],
    mode: 'payment',
    successUrl: `${window.location.origin}/success`,
    cancelUrl: `${window.location.origin}/cancel`,
  };

  const getStripe = () => {
    return loadStripe(import.meta.env.VITE_STRIPE_KEY);
  };

  const redirectToCheckout = async () => {
    setIsLoading(true);
    try {
      const stripe = await getStripe();
      await stripe.redirectToCheckout(checkoutOptions);
    } catch (err) {
      setIsLoading(false);
      addToast({ type: 'error', content: 'Error occured!' });
      throw new Error(err);
    }
  };

  return (
    <button className="checkout-button" onClick={redirectToCheckout} disabled={isLoading}>
      {isLoading ? 'Loading...' : 'Checkout'}
    </button>
  );
};

export default CheckoutButton;
