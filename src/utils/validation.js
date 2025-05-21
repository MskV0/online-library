// src/utils/validation.js
export const validateBookForm = (formData) => {
  const errors = {};

  if (!formData.title.trim()) {
    errors.title = 'Title is required';
  }

  if (!formData.author.trim()) {
    errors.author = 'Author is required';
  }

  if (!formData.category || formData.category === 'Select Category') {
    errors.category = 'Category is required';
  }

  if (!formData.description.trim()) {
    errors.description = 'Description is required';
  } else if (formData.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  if (!formData.rating) {
    errors.rating = 'Rating is required';
  } else if (isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
    errors.rating = 'Rating must be a number between 1 and 5';
  }

  if (!formData.coverImage.trim()) {
    errors.coverImage = 'Cover image URL is required';
  }

  return errors;
};