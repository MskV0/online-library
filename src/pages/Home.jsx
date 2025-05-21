// src/pages/Home.jsx
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectAllBooks } from "../redux/bookSlice";
import CategoryList from "../components/CategoryList";
import BookCard from "../components/BookCard";

const Home = () => {
  const books = useSelector(selectAllBooks);
  const popularBooks = books.filter((book) => book.isPopular).slice(0, 4);

  return (
    <div className="home-page">
      <section className="hero-section">
        <div className="hero-overlay">
          <h1>Welcome to Online Library</h1>
          <p style={{ color: "black" }}>Dive into curated collections, timeless classics, and hidden gems — all in one digital library.</p>
          <Link to="/browse" className="browse-btn">
            Browse All Books
          </Link>
        </div>
      </section>

      <section className="categories-section">
        <CategoryList />
      </section>

      <section className="popular-books-section">
        <h2>Popular Books</h2>
        <div className="book-list">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        <Link to="/browse" className="view-more-btn">
          View More Books
        </Link>
      </section>
    </div>
  );
};

export default Home;
