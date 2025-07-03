import React, { createContext, useState } from 'react';

export const BookContext = createContext();

export const BookProvider = ({ children }) => {
  // Books fetched from API
  const [books, setBooks] = useState([]);
  // Cart items
  const [cart, setCart] = useState([]);
  // Book details modal state
  const [selectedBook, setSelectedBook] = useState(null);
  // Cart modal state
  const [cartOpen, setCartOpen] = useState(false);
  // Checkout modal state
  const [checkoutOpen, setCheckoutOpen] = useState(false);

  return (
    <BookContext.Provider value={{
      books, setBooks,
      cart, setCart,
      selectedBook, setSelectedBook,
      cartOpen, setCartOpen,
      checkoutOpen, setCheckoutOpen
    }}>
      {children}
    </BookContext.Provider>
  );
}; 