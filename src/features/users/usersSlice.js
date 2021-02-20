import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const usersSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    error: null,
    isLoading: false,
  },
  reducers: {
    setUsers: (state, action) => {
      state.users = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { setUsers, setError, setLoading } = usersSlice.actions;

export const getUsers = () => async dispatch => {
  dispatch(setLoading(true));
  try {
    const response = await axios.get('https://my-json-server.typicode.com/karolkproexe/jsonplaceholderdb/data');
    if(response && response.status === 200) {
      dispatch(setUsers(response.data));
    } else {
      dispatch(setError('Coś poszło nie tak'));
    }
    dispatch(setLoading(false));
  } catch (error) {
    dispatch(setError(error.message));
    dispatch(setLoading(false));
  }
};

export const selectUsers = state => state.counter.users;

export default usersSlice.reducer;
