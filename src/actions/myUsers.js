import {
    RETRIEVE_USERS,
    DELETE_USER,
  } from "./types";
  
  import userService from "../services/userService";
  
  
  export const retrieveUsers = () => async (dispatch) => {
    try {
      const res = await userService.getAll();
  
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
  export const deleteUser = (id) => async (dispatch) => {
    try {
      await userService.remove(id);
  
      dispatch({
        type: DELETE_USER,
        payload: { id },
      });
    } catch (err) {
      console.log(err);
    }
  };
  
  
  export const findUserByName = (name) => async (dispatch) => {
    try {
      const res = await userService.findByName(name);
  
      dispatch({
        type: RETRIEVE_USERS,
        payload: res.data,
      });
    } catch (err) {
      console.log(err);
    }
  };