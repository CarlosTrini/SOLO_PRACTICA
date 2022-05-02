import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import initUsers from  './state';

export const getUsers = createAsyncThunk('users/getUsers', async() => {
  const response = await axios('http://localhost:4000/users');
  return response.data;
}); 

const usersSlice = createSlice({
  name: 'users',
  initialState: initUsers,
  reducers: {
    showGreetings: state => {
      state.greetings = 'Iniciando... saludos...'
    }
  },
  extraReducers: builder => {
    builder
      .addCase(getUsers.pending, (state, action) => {
        state.loading = true
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.users = action.payload;
        state.loading = false;
        state.failed = false;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.loading = false;
        state.failed = true;
      })
  }
});

export const {showGreetings} = usersSlice.actions;
export default usersSlice.reducer;