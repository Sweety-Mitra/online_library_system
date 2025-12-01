## 🔗 GitHub Repository

    https://github.com/Sweety-Mitra/online_library_system

---

## 🔗 Live Demo

    https://demo-online-library-system-azure.vercel.app/

---

# Online Library System – React + Vite

The project is an Online Library System which includes browsing books, searching, filtering by category, viewing book details, adding new books using Redux Toolkit, and handling 404 routes.

---

## Features

### Home Page
- Displays a welcome message
- Shows a list of book categories
- Shows popular books in card format
- Contains a navigation bar with links to Home, Browse Books, and Add Book

### Browse Books Page
- Displays all books using dummy data
- Dynamic category filter using the route `/books/:category`
- Search bar to filter books by title or author
- "View Details" link for each book

### Book Details Page
- Dynamic route `/book/:id`
- Shows complete details of a selected book
- Displays title, author, description, category, and rating
- Includes a "Back to Browse" button

### Add Book Page
- Contains a form to add a new book
- Uses Redux Toolkit for managing book list state
- Form validation ensures all fields are filled
- After submission, newly added book appears at the top
- Redirects to Browse Books page automatically

### 404 Page
- Displays the invalid URL
- Does not include the navigation bar
- Contains a link to return to the Home page

---

## Technologies Used
- React
- Vite
- React Router DOM
- Redux Toolkit
- CSS

---

## Installation and Setup

### 1. Clone the Repository
```bash
git clone https://github.com/Sweety-Mitra/Online_Library_System.git
```

### 2. Navigate into the Project Directory
```bash
cd Online_Lib
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run the Development Server
```bash
npm run dev
```

### 5. Open the App in the Browser
```
http://localhost:5173
```

---

## Build for Production
```bash
npm run build
```

---

## Author
Sweety Mitra  
