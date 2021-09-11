import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const login = async (user, dispatch) => {
  dispatch(loginStart());
  try {
    const res = await axios.post("auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (err) {
    dispatch(loginFailure());
  }
};

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: JSON.parse(localStorage.getItem("user")) || null,
    isFetching: false,
    error: false,
  },
  reducers: {
    loginStart: (state, action) => {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    },
    loginSuccess: (state, action) => {
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    },
    loginFailure: (state, action) => {
      return {
        user: null,
        isFetching: false,
        error: true,
      };
    },
    signOut: (state, action) => {
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    },
  },
});

export const { loginStart, loginSuccess, loginFailure, signOut } =
  authSlice.actions;
export default authSlice.reducer;
