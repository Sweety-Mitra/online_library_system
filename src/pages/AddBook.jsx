import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

export default function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = [ "Fiction", "Non-Fiction", "Sci-Fi", "History", "Mystery" ];

  const [ form, setForm ] = useState( {
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
    image: "",
  } );

  const [ errors, setErrors ] = useState( {} );

  function validate() {
    const e = {};

    // Title
    if ( !form.title.trim() ) e.title = "Title is required";

    // Author: alphabets + spaces only
    if ( !form.author.trim() ) e.author = "Author is required";
    else if ( !/^[A-Za-z\s]+$/.test( form.author ) )
      e.author = "Author name must contain only alphabets";

    // Category (dropdown)
    if ( !form.category.trim() ) e.category = "Category is required";

    // Description
    if ( !form.description.trim() ) e.description = "Description is required";

    // Rating: number (0.1 - 5)
    const r = parseFloat( form.rating );
    if ( !form.rating.trim() ) e.rating = "Rating is required";
    else if ( isNaN( r ) ) e.rating = "Rating must be a valid number";
    else if ( r < 0.1 || r > 5 ) e.rating = "Rating must be between 0.1 and 5";

    // Image URL
    if ( !form.image.trim() ) e.image = "Image URL is required";
    else if ( !form.image.startsWith( "http" ) )
      e.image = "Enter a valid image URL";

    return e;
  }

  const handleSubmit = ( e ) => {
    e.preventDefault();
    const eObj = validate();
    setErrors( eObj );
    if ( Object.keys( eObj ).length > 0 ) return;

    const newBook = {
      id: uuidv4(),
      title: form.title.trim(),
      author: form.author.trim(),
      category: form.category,
      description: form.description.trim(),
      rating: parseFloat( form.rating ),
      image: form.image.trim(),
    };

    dispatch( addBook( newBook ) );
    navigate( "/books" ); // redirect to Browse Books page
  };

  return (
    <div className="form-container">
      <h2>Add a New Book</h2>

      <form className="form" onSubmit={ handleSubmit } noValidate>

        {/* Title */ }
        <label>
          Title
          <input
            value={ form.title }
            onChange={ ( e ) => setForm( { ...form, title: e.target.value } ) }
          />
          { errors.title && <small className="error">{ errors.title }</small> }
        </label>

        {/* Author */ }
        <label>
          Author
          <input
            value={ form.author }
            onChange={ ( e ) => {
              const value = e.target.value;
              if ( /^[A-Za-z\s]*$/.test( value ) ) {
                setForm( { ...form, author: value } );
              }
            } }
            placeholder="Only alphabets allowed"
          />
          { errors.author && <small className="error">{ errors.author }</small> }
        </label>

        {/* Category */ }
        <div className="form-group">
          <label>Category</label>

          <select
            value={ form.category }
            onChange={ ( e ) => setForm( { ...form, category: e.target.value } ) }
            style={ { width: "540px", padding: "8px", display: "block", marginTop: "6px", borderRadius: "10px", height: "40px", border: "1px solid #000000" } }
          >
            <option value="">Select Category</option>
            { categories.map( ( c ) => (
              <option key={ c } value={ c }>{ c }</option>
            ) ) }
          </select>

          { errors.category && <small className="error">{ errors.category }</small> }
        </div>

        {/* Description */ }
        <label>
          Description
          <textarea
            value={ form.description }
            onChange={ ( e ) => setForm( { ...form, description: e.target.value } ) }
          />
          { errors.description && <small className="error">{ errors.description }</small> }
        </label>

        {/* Rating */ }
        <label>
          Rating (0.1 - 5)
          <input
            type="number"
            step="0.1"
            min="0.1"
            max="5"
            value={ form.rating }
            onChange={ ( e ) => setForm( { ...form, rating: e.target.value } ) }
          />
          { errors.rating && <small className="error">{ errors.rating }</small> }
        </label>

        {/* Image URL */ }
        <label>
          Image URL
          <input
            value={ form.image }
            onChange={ ( e ) => setForm( { ...form, image: e.target.value } ) }
            placeholder="https://example.com/book-cover.jpg"
          />
          { errors.image && <small className="error">{ errors.image }</small> }
        </label>

        {/* Buttons */ }
        <div className="form-actions">
          <button type="submit" className="btn">Add Book</button>
          <button
            type="button"
            className="btn ghost"
            onClick={ () => navigate( -1 ) }
          >
            Cancel
          </button>
        </div>

      </form>
    </div>
  );
}
