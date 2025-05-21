// src/pages/BrowseBooks.jsx
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { filterByCategory, selectFilteredBooks } from '../redux/bookSlice';
import BookList from '../components/BookList';
import SearchBar from '../components/SearchBar';
import { categories } from '../data/categories';

const BrowseBooks = () => {
  const { category } = useParams();
  const dispatch = useDispatch();
  const filteredBooks = useSelector(selectFilteredBooks);

  useEffect(() => {
    dispatch(filterByCategory(category || 'All'));
  }, [category, dispatch]);

  return (
    <div className="browse-books-page">
      <h1>Browse Books {category ? `- ${category}` : ''}</h1>
      
      <div className="filter-controls">
        <div className="category-filter">
          <h3>Categories</h3>
          <ul className="category-tabs">
            {categories.map(cat => (
              <li 
                key={cat.id} 
                className={(!category && cat.name === 'All') || cat.name === category ? 'active' : ''}
              >
                <a href={cat.name === 'All' ? '/browse' : `/browse/${cat.name}`}>
                  {cat.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
        
        <SearchBar />
      </div>
      
      <BookList books={filteredBooks} />
    </div>
  );
};

export default BrowseBooks;