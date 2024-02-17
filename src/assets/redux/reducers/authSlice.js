import { createSlice } from "@reduxjs/toolkit";
import connect, {
  singInByRememberMe,
} from "../../../pages/LoginPage/loginRequest";

const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.isAuthenticated = true;
      state.error = null;
    },
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
    },
    loadUser: (state, action) => {
      state.user = action.payload;
    },
    reset: (state) => {
      state.error = null;
      state.isAuthenticated = false;
      state.user = null;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(connect.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(connect.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message;
      });
    builder
      .addCase(singInByRememberMe.fulfilled, (state, action) => {
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(singInByRememberMe.rejected, (state, action) => {
        state.isAuthenticated = false;
        state.user = null;
        state.error = action.error.message;
      });
  },
});

export const { login, logout, loadUser, reset } = authSlice.actions;
export default authSlice.reducer;
