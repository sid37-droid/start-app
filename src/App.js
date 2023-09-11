
import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { searchBooks, loadMoreBooks } from './actions';
import BookCard from './components/bookCard';
import BookDetail from './components/bookDetail';
import { Route, Router } from 'react-router';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [category, setCategory] = useState('all');
  const [sort, setSort] = useState('relevance');
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);
  const startIndex = useSelector(state => state.startIndex);
  const totalItems = useSelector(state => state.totalItems);
  const selectedBook = useSelector(state => state.selectedBook);
  const handleSearch = () => {
    dispatch(searchBooks(searchTerm, category, sort));
  };
  const handleLoadMore = () => {
    dispatch(loadMoreBooks(searchTerm, category, sort, startIndex + books.length));
  };
  return (
      <div className='header__container'>
        <h1>Book Search App</h1>
        <div className='search__container'>
          <input
            className='search'
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
          <button className='search__button' onClick={handleSearch}>Search</button>
        </div>
        <div>
          <select value={category} onChange={e => setCategory(e.target.value)}>
            <option value="all">All</option>
            <option value="art">Art</option>
            <option value="biography">Biography</option>
            <option value="computers">Computers</option>
            <option value="history">History</option>
            <option value="medical">Medical</option>
            <option value="poetry">Poetry</option>
          </select>
          <select value={sort} onChange={e => setSort(e.target.value)}>
            <option value="relevance">Relevance</option>
            <option value="newest">Newest</option>
          </select>
        </div>
        <p>Found {totalItems} book(s)</p>
        <div className="book-list">
          {books.map(book => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
        {selectedBook && <BookDetail book={selectedBook} />}
          <button onClick={handleLoadMore}>Load more</button>
      </div>
  );
};
export default App;
