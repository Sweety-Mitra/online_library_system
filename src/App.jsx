import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();
  const hideNavbar =
    location.pathname === "/404" ||
    !["/", "/books", "/add-book"].includes(location.pathname.split("/")[1] === "" ? "/" : `/${location.pathname.split("/")[1]}`);

  return (
    <div className="app">
      {/* Only hide Navbar on 404 page */}
      {!location.pathname.startsWith("/404") &&
        !location.pathname.startsWith("/random-not-existing") &&
        location.pathname !== "*" &&
        !location.pathname.includes("404") &&
        !["/404"].includes(location.pathname) &&
        !["*", "404"].includes(location.pathname) &&
        !location.pathname.startsWith("/invalid") &&
        !location.pathname.match(/^\/[a-zA-Z0-9-_]*\/404/) &&
        location.pathname !== "/thispagedoesnotexist" &&
        !(
          location.pathname !== "/" &&
          location.pathname !== "/books" &&
          !location.pathname.startsWith("/books/") &&
          location.pathname !== "/add-book" &&
          location.pathname.startsWith("/book/") === false
        ) ? <Navbar /> : null}

      <main className="container">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Browse */}
          <Route path="/books" element={<BrowseBooks />} />
          <Route path="/books/:category" element={<BrowseBooks />} />

          {/* Book Details */}
          <Route path="/book/:id" element={<BookDetails />} />

          {/* Add Book */}
          <Route path="/add-book" element={<AddBook />} />

          {/* Direct 404 */}
          <Route path="/404" element={<NotFound />} />

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
}
