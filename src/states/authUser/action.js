import { getMyProfile, login, saveAccessToken } from "../../utils";

const ActionType = {
  SET_AUTH_USER: "SET_AUTH_USER",
  UNSET_AUTH_USER: "UNSET_AUTH_USER",
};

function setAuthUserActionCreator(authUser) {
  return { type: ActionType.SET_AUTH_USER, payload: { authUser } };
}

function unsetAuthUserActionCreator() {
  return { type: ActionType.UNSET_AUTH_USER, payload: { authUser: null } };
}

function asyncSetAuthUser({ email, password }) {
  return async (dispatch) => {
    try {
      const token = await login({ email, password });

      saveAccessToken(token);

      const authUser = await getMyProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      alert(error.message);
    }
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    saveAccessToken("");
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
};
