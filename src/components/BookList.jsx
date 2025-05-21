// src/components/BookList.jsx
import BookCard from './BookCard';

const BookList = ({ books }) => {
  if (books.length === 0) {
    return <p className="no-books">No books found. Try a different search or category.</p>;
  }

  return (
    <div className="book-list">
      {books.map(book => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;