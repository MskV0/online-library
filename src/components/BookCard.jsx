// src/components/BookCard.jsx
import { Link } from 'react-router-dom';

const BookCard = ({ book }) => {
  return (
    <div className="book-card">
       {book.isPopular && (
        <span className="popular-badge">Popular</span>
      )}
      <img src={book.coverImage} alt={book.title} className="book-cover" />
      <div className="book-info">
        <h3 style={{ minHeight: '3em', overflow: 'hidden' }}>{book.title}</h3>
        <p>by {book.author}</p>
        <p className="book-rating">Rating: {book.rating} / 5</p>
        <p className="book-category">Category: {book.category}</p>
        <Link to={`/book/${book.id}`} className="view-details-btn">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default BookCard;