import {createSlice } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  loginToken: null,
   IsAuthenticate:null,
};

// Create the slice
const loginSlice = createSlice({
  name: 'userlogin',
  initialState,
  reducers: {
    login(state,action){
     state.loginToken = action.payload
    },
    Logout(state){
      state.loginToken = null 
    },
     setIsAuthenticate: (state, action) => {
  state.IsAuthenticate = action.payload; // true / false
},
  },
});
export const {Logout,login,setIsAuthenticate} = loginSlice.actions
export default loginSlice.reducer;
