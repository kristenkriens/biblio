import axios from 'axios';

import * as actionTypes from './actionTypes';
import { removeDashes } from '../../shared/utilities';
import { openErrorModal } from './modal';

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

    axios.get('http://api-biblio.officebureau.ca/wp-json/wp/v2/posts?_embed')
      .then((response) => {
        dispatch(getBooksSuccess(response.data));

        let isbns = []
        response.data.map((item) => isbns.push(removeDashes(item.acf.isbn)));

        dispatch(getGoodreadsData(isbns));
      }).catch((error) => {
        const errorMessage = error.message;

        dispatch(getBooksFail(errorMessage));
        dispatch(openErrorModal(errorMessage));
      });
  }
}

export const getGoodreadsDataStart = () => {
  return {
    type: actionTypes.GET_GOODREADS_DATA_START
  }
}

export const getGoodreadsDataSuccess = (ratings) => {
  return {
    type: actionTypes.GET_GOODREADS_DATA_SUCCESS,
    ratings: ratings
  }
}

export const getGoodreadsDataFail = (error) => {
  return {
    type: actionTypes.GET_GOODREADS_DATA_FAIL,
    error: error
  }
}

export const getGoodreadsData = (isbns) => {
  return (dispatch) => {
    dispatch(getGoodreadsDataStart());

    axios.get(`http://proxy.hackeryou.com/?reqUrl=https://www.goodreads.com/book/review_counts.json&params[key]=nvdXGxHoD0yLm1ZDiScPg&params[isbns]=${isbns}`)
      .then((response) => {
        dispatch(getGoodreadsDataSuccess(response.data.books));
      }).catch((error) => {
        const errorMessage = error.message;

        dispatch(getGoodreadsDataFail(errorMessage));
        dispatch(openErrorModal(errorMessage));
      });
  }
}
