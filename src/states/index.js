import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import categoriesReducer from "./categories/reducer";
import isPreLoadReducer from "./isPreload/reducer";
import leaderboardsReducer from "./leaderboards/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    isPreload: isPreLoadReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
    categories: categoriesReducer,
    leaderboards: leaderboardsReducer,
  },
});

export default store;
