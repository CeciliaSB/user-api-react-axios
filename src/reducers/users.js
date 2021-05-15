import {
    RETRIEVE_USERS,
    DELETE_USER,
  } from "../actions/types";
  
  const initialState = [];
  
  function userReducer(users = initialState, action) {
    const { type, payload } = action;
  
    switch (type) {
      
      case RETRIEVE_USERS:
        return payload;
  
      case DELETE_USER:
        return users.filter(({ id }) => id !== payload.id);
  
      default:
        return users;
    }
  };
  
  export default userReducer;