import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FiPlus } from 'react-icons/fi';
import './BookCard.css';

const BookCard = ({ book }) => {
  const { setSelectedBook, cart, setCart } = useContext(BookContext);
  const { volumeInfo, saleInfo } = book;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Image';
  const title = volumeInfo.title || 'No Title';
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
  let price = '';
  if (saleInfo && saleInfo.listPrice && saleInfo.listPrice.amount) {
    price = `$${saleInfo.listPrice.amount.toFixed(1)}`;
  } else {
    price = '$0.0';
  }

  function handleAddToCart(e) {
    e.stopPropagation();
    const existing = cart.find(item => item.id === book.id);
    if (existing) {
      setCart(cart.map(item => item.id === book.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...book, quantity: 1 }]);
    }
  }

  function handleImageClick(e) {
    e.stopPropagation();
    setSelectedBook(book);
  }

  return (
    <div className="book-card">
      <img className="book-image" src={thumbnail} alt={title} onClick={handleImageClick} />
      <div className="book-info">
        <h3 className="book-title">{title}</h3>
        <p className="book-authors">{authors}</p>
        <div className="book-bottom">
          <span className="book-price">{price}</span>
          <button className="add-cart-btn" onClick={handleAddToCart} title="Add to Cart">
            <FiPlus />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookCard; 