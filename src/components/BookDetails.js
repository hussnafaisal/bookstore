import React, { useContext } from 'react';
import { BookContext } from '../context/BookContext';
import { FiX, FiStar } from 'react-icons/fi';
import './BookDetails.css';

const BookDetails = () => {
  const { selectedBook, setSelectedBook } = useContext(BookContext);
  if (!selectedBook) return null;
  const { volumeInfo } = selectedBook;
  const thumbnail = volumeInfo.imageLinks?.thumbnail || 'https://via.placeholder.com/128x192?text=No+Image';
  const title = volumeInfo.title || 'No Title';
  const authors = volumeInfo.authors ? volumeInfo.authors.join(', ') : 'Unknown Author';
  const description = volumeInfo.description || 'No description available.';
  const publisher = volumeInfo.publisher || 'Unknown Publisher';
  const publishedDate = volumeInfo.publishedDate || 'Unknown Date';
  const rating = volumeInfo.averageRating || null;
  const ratingsCount = volumeInfo.ratingsCount || null;

  return (
    <div className="details-modal-overlay" onClick={() => setSelectedBook(null)}>
      <div className="details-modal" onClick={e => e.stopPropagation()}>
        <button className="details-close-btn" onClick={() => setSelectedBook(null)}><FiX /></button>
        <img className="details-image" src={thumbnail} alt={title} />
        <h2 className="details-title">{title}</h2>
        <p className="details-authors">{authors}</p>
        <div className="details-meta">
          <span>Publisher: {publisher}</span>
          <span>Published: {publishedDate}</span>
        </div>
        {rating && (
          <div className="details-rating">
            {[...Array(Math.round(rating))].map((_, i) => <FiStar key={i} color="#f7b731" />)}
            <span className="details-rating-num">{rating} ({ratingsCount})</span>
          </div>
        )}
        <div className="details-description" dangerouslySetInnerHTML={{ __html: description }} />
      </div>
    </div>
  );
};

export default BookDetails; 