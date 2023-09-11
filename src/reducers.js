const initialState = {
    books: [],
    selectedBook: null,
  };
  const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SEARCH_BOOKS':
        return {
          ...state,
          books: action.payload,
        };
      case 'LOAD_MORE_BOOKS':
        return {
          ...state,
          books: [...state.books, ...action.payload],
        };
      case 'SELECT_BOOK':
        return {
          ...state,
          selectedBook: action.payload,
        };
      default:
        return state;
    }
  };
  export default rootReducer;
  