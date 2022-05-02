import { combineReducers } from 'redux';
import usersReducer from './contador/usersReducer';

const root = combineReducers({
  usersReducer
});
export default root;