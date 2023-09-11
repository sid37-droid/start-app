import React from 'react';
import { useDispatch } from 'react-redux';
import { selectBook } from '../../actions';
import './index.css'; // Подключение файла стилей
const BookCard = ({ book }) => {
  const dispatch = useDispatch();
  const handleSelectBook = () => {
    dispatch(selectBook(book));
  };
  return (
    <div className="book-card" onClick={handleSelectBook}>
      <img src={book.volumeInfo.imageLinks?.thumbnail} alt="Book Cover" />
      <h3>{book.volumeInfo.title}</h3>
      <p>{book.volumeInfo.categories?.[0]}</p>
      <p>{book.volumeInfo.authors?.join(', ')}</p>
    </div>
  );
};
export default BookCard;
