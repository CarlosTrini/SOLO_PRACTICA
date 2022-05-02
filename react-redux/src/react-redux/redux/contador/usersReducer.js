import initUsers from './state';
import types from './types';

const usersReducer = (state = initUsers, action) => {
  switch(action.type){
    case types.GET_USERS:
      return {
        ...state,
        users: action.payload
      }
    case types.CREATE_USER: 
      return {
        ...state,
        lastCreated: action.payload
      }
    case types.LOADING: 
      return {
        ...state,
        loading: action.payload
      }
    case types.FAILED: 
      return {
        ...state,
        failed: action.payload
      }
    
    default: 
      return state;
  }
}

export default usersReducer;