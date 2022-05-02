import types from "./types";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const getUsers = () => async (dispatch) => {
  try {
    dispatch(loadingFn(true));
    const users = await axios("http://localhost:4000/users");
    dispatch({ type: types.GET_USERS, payload: users.data });
  } catch (error) {
    console.log("ERROR OBTENER", error);
    dispatch(failedFn(true));
  } finally {
    dispatch(loadingFn(false));
  }
};

const createUser = (user) => async (dispatch) => {
  try {
    dispatch(loadingFn(true));
    user.id = uuidv4();
    const response = await axios.post("http://localhost:4000/users", user);
    dispatch({ type: types.CREATE_USER, payload: response.data });
  } catch (error) {
    console.log("ERROR CREAR", error);
    dispatch(failedFn(true));
  } finally {
    dispatch(loadingFn(false));
  }
};

const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch(loadingFn(true));
    const response = await axios.delete(`http://localhost:4000/users/${id}`); 
  } catch (error) {
    console.log("ERROR ELIMINAR", error);
    dispatch(failedFn(true));
  } finally {
    dispatch(loadingFn(false));
  }
}

const editUser = (user) => async (dispatch) => {
  try {
    dispatch(loadingFn(true));
    dispatch(loadingFn(true));
    const response = await axios.put(`http://localhost:4000/users/${user.id}`, user); 
  } catch (error) {
    console.log("ERROR CREAR", error);
    dispatch(failedFn(true));
  } finally {
    dispatch(loadingFn(false));
  }
}

const failedFn = (status) => ({ type: types.FAILED, payload: status });
const loadingFn = (status) => ({ type: types.LOADING, payload: status });

export { getUsers, createUser, deleteUser, editUser };
