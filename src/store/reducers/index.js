import { combineReducers } from 'redux';

import dataReducer from './data';
import modalReducer from './modal';

export const rootReducer = combineReducers({
  data: dataReducer,
  modal: modalReducer
});
