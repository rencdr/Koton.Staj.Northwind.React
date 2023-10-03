import { createReducer } from '@reduxjs/toolkit';
import { login, logout } from '../actions/AuthActions';

const initialState = {
  isAuthenticated: false,
  userId: null as string | null,
  username: null as string | null,
};

const authReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(login, (state, action) => {
      state.isAuthenticated = true;
      state.userId = action.payload.userId;
      state.username = action.payload.username;
    })
    .addCase(logout, (state) => {
      state.isAuthenticated = false;
      state.userId = null;
      state.username = null;
    });
});

export default authReducer;
