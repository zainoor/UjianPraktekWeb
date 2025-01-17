import React, { useState, useEffect } from "react";
import { fetchBooks, addBook, deleteBook, editBook } from "./api";
import BookForm from "./components/BookForm";
import BookList from "./components/List";
import "./App.css"

function App() {
  const [books, setBooks] = useState([]);
  const [editData, setEditData] = useState(null);

  useEffect(() => {
    loadBooks();
  }, []);

  const loadBooks = async () => {
    const data = await fetchBooks();
    setBooks(data);
  };

  const handleAddBook = async (book) => {
    await addBook(book);
    loadBooks();
  };

  const handleEditBook = async (book) => {
    await editBook(book);
    loadBooks();
    setEditData(null);
  };

  const handleDeleteBook = async (id) => {
    await deleteBook(id);
    loadBooks();
  };

  const handleEditClick = (book) => {
    setEditData(book);
  };

  const clearEdit = () => {
    setEditData(null);
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center text-black mb-10">
          Perpustakaan
        </h1>
        <div className="bg-white shadow-lg rounded-lg p-6">
          <BookForm
            onAdd={handleAddBook}
            onEdit={handleEditBook}
            editData={editData}
            clearEdit={clearEdit}
          />
        </div>
        <div className="mt-10 bg-white shadow-lg rounded-lg p-6">
          <BookList
            books={books}
            onDelete={handleDeleteBook}
            onEdit={handleEditClick}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
