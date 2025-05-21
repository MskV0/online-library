// src/components/Navbar.jsx
import { Link } from 'react-router-dom';
import { BASE_PATH } from '../utils/constants';


const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/"><img src="/favicon.svg" alt="Logo" className="logo" /></a>
        <Link to="/">Online Library</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to={`${BASE_PATH}/`} className="home-link">Home</Link>
        </li>
        <li>
          <Link to={`${BASE_PATH}/browse`} className="browse-link">Browse Books</Link>
        </li>
        <li>
          <Link to={`${BASE_PATH}/add`} className="add-link">Add Book</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;