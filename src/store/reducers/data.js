import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
  books: null,
  error: null,
  loading: false
}

const getBooksStart = (state, action) => {
  const updatedState = {
    error: null,
    loading: true
  };

  return updateObject(state, updatedState);
}

const getBooksSuccess = (state, action) => {
  const updatedState = {
    books: action.books,
    error: null,
    loading: false
  };

  return updateObject(state, updatedState);
}

const getBooksFail = (state, action) => {
  const updatedState = {
    error: action.error,
    loading: false
  };

  return updateObject(state, updatedState);
}

const booksReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.GET_BOOKS_START:
      return getBooksStart(state, action);
    case actionTypes.GET_BOOKS_SUCCESS:
      return getBooksSuccess(state, action);
    case actionTypes.GET_BOOKS_FAIL:
      return getBooksFail(state, action);
    default: return state;
  }
}

export default booksReducer;
