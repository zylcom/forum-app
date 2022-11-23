import { configureStore } from "@reduxjs/toolkit";
import authUserReducer from "./authUser/reducer";
import categoryReducer from "./category/reducer";
import isPreLoadReducer from "./isPreload/reducer";
import leaderboardsReducer from "./leaderboards/reducer";
import threadDetailReducer from "./threadDetail/reducer";
import threadsReducer from "./threads/reducer";
import usersReducer from "./users/reducer";

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    category: categoryReducer,
    isPreload: isPreLoadReducer,
    leaderboards: leaderboardsReducer,
    threadDetail: threadDetailReducer,
    threads: threadsReducer,
    users: usersReducer,
  },
});

export default store;
