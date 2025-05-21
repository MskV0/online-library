// src/pages/BookDetails.jsx
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { selectAllBooks } from '../redux/bookSlice';

const BookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const books = useSelector(selectAllBooks);
  const book = books.find(book => book.id === parseInt(id));

  if (!book) {
    return (
      <div className="book-not-found">
        <h2>Book Not Found</h2>
        <p>The book you're looking for doesn't exist.</p>
        <button onClick={() => navigate('/browse')} className="back-btn">
          Back to Browse
        </button>
      </div>
    );
  }

  return (
    <div className="book-details-page">
        <div className="book-details-content">
         {book.isPopular && (
        <span className="popular-badge">Popular</span>
      )}
        <div className="book-details-img">
          <img src={book.coverImage} alt={book.title} />
        </div>
        <div className="book-details-info">
          <h1>{book.title}</h1>
          <p className="book-author">by {book.author}</p>
          <p className="book-category">Category: {book.category}</p>
          <div className="book-rating">
            <p>Rating: {book.rating} / 5</p>
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <span key={i} className={i < Math.floor(book.rating) ? 'star filled' : 'star'}>
                  ★
                </span>
              ))}
            </div>
          </div>
          <div className="book-description">
            <h3>Description:</h3>
            <p>{book.description}</p>
          </div>
          <button onClick={() => navigate('/browse')} className="back-btn">
            Back to Browse
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;