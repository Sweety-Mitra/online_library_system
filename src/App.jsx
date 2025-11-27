import Home from "./pages/Home";
import BrowseBooks from "./pages/BrowseBooks";
import BookDetails from "./pages/BookDetails";
import AddBook from "./pages/AddBook";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/books" element={<BrowseBooks />} />
      <Route path="/book/:id" element={<BookDetails />} />
      <Route path="/add-book" element={<AddBook />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}
