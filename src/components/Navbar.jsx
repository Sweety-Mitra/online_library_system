import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <header>
      <NavLink to="/">Home</NavLink> | 
      <NavLink to="/books">Browse Books</NavLink> | 
      <NavLink to="/add-book">Add Book</NavLink>
    </header>
  );
}
