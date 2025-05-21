// src/components/CategoryList.jsx
import { Link } from 'react-router-dom';
import { categories } from '../data/categories';
import { BASE_PATH } from '../utils/constants';


const CategoryList = () => {
  return (
    <div className="category-list">
      <h2>Book Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category.id}>
            <Link to={category.name === 'All' ? `${BASE_PATH}/browse` : `${BASE_PATH}/browse/${category.name}`}>
              {category.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;