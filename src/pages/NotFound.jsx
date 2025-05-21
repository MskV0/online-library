import { Link } from 'react-router-dom';
import { BASE_PATH } from '../utils/constants';

const NotFound = () => {
  return (
    <div className="not-found-page">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={`${BASE_PATH}/`} className="home-link">Go back to Home page</Link>
    </div>
  );
};

export default NotFound;
