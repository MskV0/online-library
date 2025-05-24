// src/pages/AddBook.jsx
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addBook } from "../redux/bookSlice";
import { validateBookForm } from "../utils/validation";
import { categories } from "../data/categories";

const AddBook = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    coverImage: "https://via.placeholder.com/150",
    isPopular: false,
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on field change
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: null,
      }));
    }
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  // Validate form
  const validationErrors = validateBookForm(formData);

  if (Object.keys(validationErrors).length > 0) {
    setErrors(validationErrors);
    return;
  }

  // Convert rating to number
  const bookData = {
    ...formData,
    rating: parseFloat(formData.rating),
  };

  // Dispatch to Redux
  dispatch(addBook(bookData));

  
  navigate("/browse");
};

 
  
  const handleBlur = (e) => {
  const { name, value, type, checked } = e.target;

  // Create a copy of the formData with updated value of the blurred field
  const updatedFormData = {
    ...formData,
    [name]: type === "checkbox" ? checked : value,
  };

  // Validate the entire updated form data
  const validationErrors = validateBookForm(updatedFormData);

  if (validationErrors[name]) {
    setErrors((prev) => ({
      ...prev,
      [name]: validationErrors[name],
    }));
  } else {
    setErrors((prev) => {
      const updated = { ...prev };
      delete updated[name];
      return updated;
    });
  }
};


  return (
    <div className="add-book-page">
      <h1>Add New Book</h1>

      <form onSubmit={handleSubmit} className="add-book-form">
        <div className="form-group">
          <label htmlFor="title">
            Title <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.title ? "error" : ""}
          />
          {errors.title && (
            <span className="error-message">{errors.title}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="author">
            Author <span style={{ color: "red" }}>*</span>
          </label>

          <input
            type="text"
            id="author"
            name="author"
            value={formData.author}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.author ? "error" : ""}
          />
          {errors.author && (
            <span className="error-message">{errors.author}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="category">
            Category <span style={{ color: "red" }}>*</span>
          </label>
          <select
            id="category"
            name="category"
            value={formData.category}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.category ? "error" : ""}
          >
            <option value="">Select Category</option>
            {categories
              .filter((cat) => cat.name !== "All")
              .map((category) => (
                <option key={category.id} value={category.name}>
                  {category.name}
                </option>
              ))}
          </select>
          {errors.category && (
            <span className="error-message">{errors.category}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="description">
            Description <span style={{ color: "red" }}>*</span>
          </label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            onBlur={handleBlur}
            rows="5"
            className={errors.description ? "error" : ""}
          ></textarea>
          {errors.description && (
            <span className="error-message">{errors.description}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="rating">
            Rating (1–5) <span style={{ color: "red" }}>*</span>
          </label>
          <input
            type="number"
            id="rating"
            name="rating"
            min="1"
            max="5"
            step="0.1"
            value={formData.rating}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.rating ? "error" : ""}
          />
          {errors.rating && (
            <span className="error-message">{errors.rating}</span>
          )}
        </div>

        <div className="form-group">
          <label htmlFor="coverImage">
            Cover Image URL <span style={{ color: "red" }}>*</span>
          </label>{" "}
          <input
            type="text"
            id="coverImage"
            name="coverImage"
            value={formData.coverImage}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.coverImage ? "error" : ""}
          />
          {errors.coverImage && (
            <span className="error-message">{errors.coverImage}</span>
          )}
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="isPopular"
            name="isPopular"
            checked={formData.isPopular}
            onChange={handleChange}
          />
          <label htmlFor="isPopular">Mark as Popular</label>
        </div>

        <div className="form-buttons">
          <button type="submit" className="submit-btn">
            Add Book
          </button>
          <button
            type="button"
            onClick={() => navigate("/browse")}
            className="cancel-btn"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBook;
