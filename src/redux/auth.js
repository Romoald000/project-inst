import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: false,
  currentUser: null,
};

const Auth = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuthenticated = true;
      state.currentUser = action.payload;

    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.currentUser = null;
    },
  },
});

export const { login, logout } = Auth.actions;
export default Auth.reducer;
