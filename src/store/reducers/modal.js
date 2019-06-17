import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../../shared/utilities';

const initialState = {
  isModalOpen: false,
  errorMessage: ''
}

const openErrorModal = (state, action) => {
  const updatedState = {
    isModalOpen: true,
    errorMessage: action.errorMessage
  };

  return updateObject(state, updatedState);
}

const closeErrorModal = (state, action) => {
  const updatedState = {
    isModalOpen: false
  };

  return updateObject(state, updatedState);
}

const modalReducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.OPEN_ERROR_MODAL:
      return openErrorModal(state, action);
    case actionTypes.CLOSE_ERROR_MODAL:
      return closeErrorModal(state, action);
    default: return state;
  }
}

export default modalReducer;
