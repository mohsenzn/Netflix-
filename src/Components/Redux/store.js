import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "./movieSlice";
import authReducer from "./authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
export default store;
