import { combineReducers } from 'redux';

import userReducer from './user.js';
import modalWindowReducer from './modal.js';

const rootReducer = combineReducers({
  userReducer,
  modalWindowReducer,
});

export default rootReducer;
