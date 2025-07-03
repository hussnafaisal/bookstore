import React, { useEffect, useContext, useState } from 'react';
import { BookContext } from '../context/BookContext';
import BookCard from './BookCard';
import './BookList.css';

const DEFAULT_QUERY = 'bestsellers';

const BookList = ({ searchQuery }) => {
  const { books, setBooks } = useContext(BookContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchBooks() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(
          `https://www.googleapis.com/books/v1/volumes?q=${encodeURIComponent(searchQuery || DEFAULT_QUERY)}&maxResults=20`
        );
        const data = await res.json();
        if (data.items) {
          setBooks(data.items);
        } else {
          setBooks([]);
        }
      } catch (err) {
        setError('Failed to fetch books.');
      } finally {
        setLoading(false);
      }
    }
    fetchBooks();
  }, [searchQuery, setBooks]);

  if (loading) return <div className="book-list">Loading books...</div>;
  if (error) return <div className="book-list error">{error}</div>;
  if (!books.length) return <div className="book-list">No books found.</div>;

  return (
    <div className="book-list-grid">
      {books.map((item) => (
        <BookCard key={item.id} book={item} />
      ))}
    </div>
  );
};

export default BookList; 