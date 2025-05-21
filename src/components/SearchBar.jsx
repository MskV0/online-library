// src/components/SearchBar.jsx
import { useDispatch } from 'react-redux';
import { searchBooks } from '../redux/bookSlice';
import { useState } from 'react';

const SearchBar = () => {
  const dispatch = useDispatch();
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);
    dispatch(searchBooks(term));
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search by title or author..."
        value={searchTerm}
        onChange={handleSearch}
      />
    </div>
  );
};

export default SearchBar;