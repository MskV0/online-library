// src/components/Navbar.jsx
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="/favicon.svg" alt="Logo" className="logo" /></a>
        <Link to="/">Online Library</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/browse">Browse Books</Link>
        </li>
        <li>
          <Link to="/add">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;