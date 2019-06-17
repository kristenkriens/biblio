import axios from 'axios';

import * as actionTypes from './actionTypes';
import { openErrorModal } from './modal';

const baseUrl = 'http://api-biblio.officebureau.ca/wp-json/wp/v2';

export const getBooksStart = () => {
  return {
    type: actionTypes.GET_BOOKS_START
  }
}

export const getBooksSuccess = (books) => {
  return {
    type: actionTypes.GET_BOOKS_SUCCESS,
    books: books
  }
}

export const getBooksFail = (error) => {
  return {
    type: actionTypes.GET_BOOKS_FAIL,
    error: error
  }
}

export const getBooks = () => {
  return (dispatch) => {
    dispatch(getBooksStart());

    axios.get(`${baseUrl}/posts?_embed`)
      .then((response) => {
        dispatch(getBooksSuccess(response.data));
      }).catch((error) => {
        const errorMessage = error.message;

        dispatch(getBooksFail(errorMessage));
        dispatch(openErrorModal(errorMessage));
      });
  }
}
