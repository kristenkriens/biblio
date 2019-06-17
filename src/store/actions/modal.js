import * as actionTypes from './actionTypes';

export const openErrorModal = (errorMessage) => {
  return {
    type: actionTypes.OPEN_ERROR_MODAL,
    errorMessage: errorMessage
  }
};

export const closeErrorModal = () => {
  return {
    type: actionTypes.CLOSE_ERROR_MODAL
  }
};
