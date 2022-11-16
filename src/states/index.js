import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreLoadReducer from "./isPreload/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreLoadReducer,
  },
});

export default store;
