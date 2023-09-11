import axios from 'axios';
const API_KEY = 'AIzaSyAlCEfdgXZpfEdOona6gDuB3LhyVJddzjU';
export const searchBooks = (searchTerm, category, sort) => async dispatch => {
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${searchTerm}&maxResults=30&startIndex=0&key=${API_KEY}&category=${category}&orderBy=${sort}`
    );
    dispatch({
      type: 'SEARCH_BOOKS',
      payload: response.data.items,
    });
  } catch (error) {
    console.error(error);
  }
};
export const loadMoreBooks = () => async (dispatch, getState) => {
  const startIndex = getState().books.length;
  try {
    const response = await axios.get(
      `https://www.googleapis.com/books/v1/volumes?q=${getState().searchTerm}&maxResults=30&startIndex=${startIndex}&key=${API_KEY}&category=${getState().category}&orderBy=${getState().sort}`
    );
    dispatch({
      type: 'LOAD_MORE_BOOKS',
      payload: response.data.items,
    });
  } catch (error) {
    console.error(error);
  }
};
export const selectBook = book => {
  return {
    type: 'SELECT_BOOK',
    payload: book,
  };
};
