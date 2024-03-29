import { createSlice } from "@reduxjs/toolkit";
import connect, {
  singInByRememberMe,
} from "../../../pages/LoginPage/loginRequest";
import putNewUserName from "../../../components/EditUserName/putNewUserName";


const initialState = {
  isAuthenticated: false,
  user: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
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
    builder
      .addCase(putNewUserName.fulfilled, (state, action) => {
        state.user.profil = {
          ...state.user.profil,
          userName: action.payload,
        };
        state.error = null;
      })
      .addCase(putNewUserName.rejected, (state, action) => {
        state.error = action.error.message;
      });
  },
});

export const {  logout, reset } = authSlice.actions;
export default authSlice.reducer;
