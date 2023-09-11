import React from 'react';
import { useSelector } from 'react-redux';
import './index.css'; // Подключение файла стилей
const BookDetail = () => {
  const selectedBook = useSelector(state => state.selectedBook);
  if (!selectedBook) {
    return null;
  }
  return (
    <div className="book-detail">
      <img src={selectedBook.volumeInfo.imageLinks?.thumbnail} alt="Book Cover" />
      <h3>{selectedBook.volumeInfo.title}</h3>
      <p>Categories: {selectedBook.volumeInfo.categories?.join(', ')}</p>
      <p>Authors: {selectedBook.volumeInfo.authors?.join(', ')}</p>
      <p>Description: {selectedBook.volumeInfo.description}</p>
    </div>
  );
};
export default BookDetail;
