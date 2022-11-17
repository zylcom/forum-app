import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import isPreLoadReducer from "./isPreload/reducer";
import threadDetailReducer from "./threadDetail/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreLoadReducer,
    threadDetail: threadDetailReducer,
  },
});

export default store;
