import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FiX, FiMinus, FiPlus, FiTrash2 } from 'react-icons/fi';
import './Cart.css';

const Cart = () => {
  const { cart, setCart, cartOpen, setCartOpen, setCheckoutOpen } = useContext(BookContext);

  const handleQuantity = (id, delta) => {
    setCart(cart =>
      cart.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, (item.quantity || 1) + delta) }
          : item
      )
    );
  };

  const handleRemove = id => {
    setCart(cart => cart.filter(item => item.id !== id));
  };

  const total = cart.reduce((sum, item) => {
    const price = item.saleInfo?.listPrice?.amount || 0;
    return sum + price * (item.quantity || 1);
  }, 0);

  if (!cartOpen) return null;

  return (
    <div className="cart-modal-overlay" onClick={() => setCartOpen(false)}>
      <div className="cart-modal" onClick={e => e.stopPropagation()}>
        <button className="cart-close-btn" onClick={() => setCartOpen(false)}><FiX /></button>
        <h2>Your Cart</h2>
        {cart.length === 0 ? (
          <p className="cart-empty">Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {cart.map(item => {
              const price = item.saleInfo?.listPrice?.amount ? `$${item.saleInfo.listPrice.amount.toFixed(1)}` : '$0.0';
              return (
                <div className="cart-item" key={item.id}>
                  <img src={item.volumeInfo?.imageLinks?.thumbnail || 'https://via.placeholder.com/64x96?text=No+Image'} alt={item.volumeInfo?.title} />
                  <div className="cart-item-info">
                    <div className="cart-item-title">{item.volumeInfo?.title}</div>
                    <div className="cart-item-authors">{item.volumeInfo?.authors?.join(', ')}</div>
                    <div className="cart-item-price">{price}</div>
                    <div className="cart-qty-controls">
                      <button onClick={() => handleQuantity(item.id, -1)} disabled={item.quantity <= 1}><FiMinus /></button>
                      <span>{item.quantity || 1}</span>
                      <button onClick={() => handleQuantity(item.id, 1)}><FiPlus /></button>
                      <button className="cart-remove-btn" onClick={() => handleRemove(item.id)} title="Remove">
                        <span className="cart-remove-icon"><FiTrash2 /></span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
        <div className="cart-total-row">
          <span>Total:</span>
          <span className="cart-total">{total ? `$${total.toFixed(1)}` : '$0.0'}</span>
        </div>
        <button className="cart-checkout-btn" disabled={cart.length === 0} onClick={() => { setCartOpen(false); setTimeout(() => setCheckoutOpen(true), 300); }}>
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart; 