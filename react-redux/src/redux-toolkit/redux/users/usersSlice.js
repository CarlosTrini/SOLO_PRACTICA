import { createSlice } from '@reduxjs/toolkit';
import initUsers from  './state';


const usersSlice = createSlice({
  name: 'users',
  initialState: initUsers,
  reducers: {
    showGreetings: state => {
      state.greetings = 'Iniciando... saludos...'
    }
  }
});

export const {showGreetings} = usersSlice.actions;
export default usersSlice.reducer;