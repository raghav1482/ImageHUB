import { createSlice } from '@reduxjs/toolkit';

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    loginStatus: false,
  },
  reducers: {
    login: state => {
      state.loginStatus = true;
    },
    logout: state => {
      state.loginStatus = false;
      sessionStorage.clear();
    },
  },
});

export const { login, logout } = authSlice.actions;

export const selectLoginStatus = state => state.auth.loginStatus;

export default authSlice.reducer;
