export const validateBookForm = (formData) => {
  const errors = {};

  // Title validation
  if (!formData.title.trim()) {
    errors.title = 'Title is required';
  }

  // Author validation
  if (!formData.author.trim()) {
    errors.author = 'Author is required';
  } else if (!/^[a-zA-Z\s.]+$/.test(formData.author.trim())) {
    errors.author = 'Author name must contain only letters, spaces, or periods';
  }

  // Category validation
  if (!formData.category || formData.category === 'Select Category') {
    errors.category = 'Category is required';
  }

  // Description validation
  if (!formData.description.trim()) {
    errors.description = 'Description is required';
  } else if (formData.description.trim().length < 10) {
    errors.description = 'Description must be at least 10 characters';
  }

  // Rating validation
  if (!formData.rating) {
    errors.rating = 'Rating is required';
  } else if (isNaN(formData.rating) || formData.rating < 1 || formData.rating > 5) {
    errors.rating = 'Rating must be a number between 1 and 5';
  }

  // Cover Image URL validation
  if (!formData.coverImage.trim()) {
    errors.coverImage = 'Cover image URL is required';
  } else if (
    !/^(https?:\/\/)([\w\-]+\.)+[\w\-]+(\/[\w\-._~:/?#[\]@!$&'()*+,;=]*)?$/.test(formData.coverImage.trim())
  ) {
    errors.coverImage = 'Please enter a valid image URL (starting with http or https)';
  }

  return errors;
};
