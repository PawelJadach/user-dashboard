import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiUrl } from "../../config";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: null,
    error: null,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    removeUser: (state, action) => {
      state.users = state.users.filter(user => user.id !== action.payload);
    },
    setUser: (state, action) => {
      state.users = state.users.map(user => {
        if(user.id !== action.payload.id) return user;
        return action.payload;
      });
    },
    addUser: (state, action) => {
      state.users = [...state.users, action.payload];
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setUsers, setError, removeUser, setUser, addUser } = usersSlice.actions;

export const getUsers = () => async dispatch => {
  try {
    const response = await axios.get(apiUrl);
    if(response && response.status === 200) {
      dispatch(setUsers(response.data));
    } else {
      dispatch(setError("Coś poszło nie tak"));
    }
  } catch (error) {
    dispatch(setError(error.message));
  }
};

export const removeUserById = id => async dispatch => {
  if(id > 10){
    dispatch(removeUser(id));
  } else {
    try {
      const response = await axios.delete(`${apiUrl}/${id}`);

      if(response.status === 200) {
        dispatch(removeUser(id));
      }
    } catch (error) {
      dispatch(setError(error.message));
    }
  }
};

export const editUser = newUser => async dispatch => {
  if(newUser.id > 10){
    dispatch(setUser(newUser));

    return true;
  } else {
    try {
      const response = await axios.put(`${apiUrl}/${newUser.id}`, newUser);

      if(response && response.status === 200) {
        dispatch(setUser(response.data));

        return true;
      } else {
        return false;
      }
    } catch (error) {
      dispatch(setError(error.message));
      return false;
    }
  }

};

export const addNewUser = newUser => async dispatch => {
  try {
    const response = await axios.post(apiUrl, newUser);
    console.log(response)
    if(response && response.status === 201) {
      dispatch(addUser(response.data));

      return true;
    }
    return false;
  } catch (error) {
    dispatch(setError(error.message));
    return false;
  }
};

export default usersSlice.reducer;
