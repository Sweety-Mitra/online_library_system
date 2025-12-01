import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  function validate() {
    const e = {};
    if (!form.title.trim()) e.title = "Title is required";
    if (!form.author.trim()) e.author = "Author is required";
    if (!form.category.trim()) e.category = "Category is required";
    if (!form.description.trim()) e.description = "Description is required";
    const r = parseFloat(form.rating);
    if (!form.rating.trim()) e.rating = "Rating is required";
    else if (isNaN(r) || r < 0 || r > 5) e.rating = "Rating must be between 0 and 5";
    return e;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const eObj = validate();
    setErrors(eObj);
    if (Object.keys(eObj).length > 0) return;

    const newBook = {
      id: uuidv4(),
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category.trim(),
      description: form.description.trim(),
      rating: parseFloat(form.rating),
    };

    dispatch(addBook(newBook));
    navigate("/books");
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>
      <form className="form" onSubmit={handleSubmit} noValidate>
        <label>
          Title
          <input
            value={form.title}
            onChange={(e) => setForm({ ...form, title: e.target.value })}
          />
          {errors.title && <small className="error">{errors.title}</small>}
        </label>

        <label>
          Author
          <input
            value={form.author}
            onChange={(e) => setForm({ ...form, author: e.target.value })}
          />
          {errors.author && <small className="error">{errors.author}</small>}
        </label>

        <label>
          Category
          <input
            value={form.category}
            onChange={(e) => setForm({ ...form, category: e.target.value })}
            placeholder="e.g., Fiction"
          />
          {errors.category && <small className="error">{errors.category}</small>}
        </label>

        <label>
          Description
          <textarea
            value={form.description}
            onChange={(e) => setForm({ ...form, description: e.target.value })}
          />
          {errors.description && <small className="error">{errors.description}</small>}
        </label>

        <label>
          Rating (0 - 5)
          <input
            value={form.rating}
            onChange={(e) => setForm({ ...form, rating: e.target.value })}
          />
          {errors.rating && <small className="error">{errors.rating}</small>}
        </label>

        <div className="form-actions">
          <button type="submit" className="btn">
            Add Book
          </button>
          <button type="button" className="btn ghost" onClick={() => navigate(-1)}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
