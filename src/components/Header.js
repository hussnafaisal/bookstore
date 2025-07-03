import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FiShoppingCart, FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = ({ onSearch }) => {
  const { cart, setCartOpen } = useContext(BookContext);
  const cartCount = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);

  return (
    <header className="header">
      <Link to="/" className="logo">BOOKSTORE</Link>
      <div className="search-bar-wrapper">
        <input
          className="search-bar"
          placeholder="Search books..."
          onChange={e => onSearch(e.target.value)}
        />
        <FiSearch className="search-icon" />
      </div>
      <div className="header-actions">
        <Link to="/login" className="header-btn header-login">Login</Link>
        <Link to="/signup" className="header-btn header-signup">Sign Up</Link>
        <div className="cart-icon" onClick={() => setCartOpen(true)}>
          <FiShoppingCart size={24} />
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </div>
      </div>
    </header>
  );
};

export default Header; 