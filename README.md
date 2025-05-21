# Online Library System

A React application that simulates an online library system where users can browse books by category, view book details, search for books, and add new books to the library.

## Features

- **Home Page**: Welcome page with featured popular books and category navigation
- **Browse Books**: View all books with filtering by category and search functionality
- **Book Details**: Detailed view of individual books with description and rating
- **Add Book**: Form to add new books to the library
- **Responsive Design**: Works on various screen sizes
- **State Management**: Using Redux for managing the application state

## Technologies Used

- React
- React Router
- Redux Toolkit
- CSS for styling

## Installation

1. Clone the repository:

```bash
git clone https://github.com/your-username/online-library-system.git
cd online-library-system
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

## Project Structure

```
online-library-system/
├── src/
│   ├── App.jsx               # Main application component
│   ├── main.jsx              # Entry point
│   ├── components/           # Reusable components
│   │   ├── Navbar.jsx        # Navigation bar
│   │   ├── BookCard.jsx      # Book card component
│   │   ├── BookList.jsx      # List of book cards
│   │   ├── SearchBar.jsx     # Search functionality
│   │   └── CategoryList.jsx  # List of categories
│   ├── pages/                # Page components
│   │   ├── Home.jsx          # Home page
│   │   ├── BrowseBooks.jsx   # Browse books page
│   │   ├── BookDetails.jsx   # Book details page
│   │   ├── AddBook.jsx       # Add book page
│   │   └── NotFound.jsx      # 404 page
│   ├── redux/                # Redux store and slices
│   │   ├── store.js          # Redux store configuration
│   │   └── bookSlice.js      # Books slice with reducers
│   ├── data/                 # Static data
│   │   ├── books.js          # Sample book data
│   │   └── categories.js     # Book categories
│   ├── utils/                # Utilities
│   │   └── validation.js     # Form validation
│   └── App.css               # Main stylesheet
└── README.md                 # Project documentation
```

## Usage Guide

### Home Page
- View welcome message and featured popular books
- Navigate to different sections using the navigation bar
- Browse books by category

### Browse Books Page
- View all books in the library
- Filter books by category using the tabs
- Search for books by title or author using the search bar
- Click on "View Details" to see more information about a book

### Book Details Page
- View detailed information about a selected book
- See the book's title, author, description, and rating
- Click "Back to Browse" to return to the browse page

### Add Book Page
- Fill out the form to add a new book to the library
- All fields are validated to ensure correct data entry
- After successful submission, you'll be redirected to the Browse Books page

### 404 Page
- Displays when navigating to an undefined route
- Provides a link back to the Home page

## Redux State Management

The application uses Redux for state management with the following main features:
- Store all books in the state
- Filter books by category
- Search books by title or author
- Add new books to the library

## Form Validation

The Add Book form includes validation for:
- Required fields (title, author, category, description, rating)
- Rating range (between 1 and 5)
- Description length (minimum 10 characters)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Sample book data and images are for demonstration purposes only
- Favicon designed for educational use