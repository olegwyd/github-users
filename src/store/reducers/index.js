import { combineReducers } from 'redux';

import userReducer from './user.js';

const rootReducer = combineReducers({
  userReducer,
});

export default rootReducer;
