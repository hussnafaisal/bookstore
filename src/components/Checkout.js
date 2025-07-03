import React, { useContext, useEffect } from 'react';
import { BookContext } from '../context/BookContext';
import './Checkout.css';

const Checkout = () => {
  const { checkoutOpen, setCheckoutOpen, setCart, setCartOpen } = useContext(BookContext);

  useEffect(() => {
    if (checkoutOpen) {
      setTimeout(() => {
        setCheckoutOpen(false);
        setCart([]);
        setCartOpen(false);
      }, 2000);
    }
  }, [checkoutOpen, setCheckoutOpen, setCart, setCartOpen]);

  if (!checkoutOpen) return null;

  return (
    <div className="checkout-modal-overlay">
      <div className="checkout-modal">
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    </div>
  );
};

export default Checkout; 