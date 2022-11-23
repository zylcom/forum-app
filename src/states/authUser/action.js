import Swal from "sweetalert2";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import { getMyProfile, login, register, saveAccessToken } from "../../utils";

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
    dispatch(showLoading());

    try {
      const token = await login({ email, password });

      saveAccessToken(token);

      const authUser = await getMyProfile();

      dispatch(setAuthUserActionCreator(authUser));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }

    dispatch(hideLoading());
  };
}

function asyncUnsetAuthUser() {
  return (dispatch) => {
    dispatch(unsetAuthUserActionCreator());
    saveAccessToken("");
  };
}

function asyncRegisterUser({ name, email, password }) {
  return async (dispatch) => {
    dispatch(showLoading());

    try {
      const user = await register({ name, email, password });
      const token = await login({ email, password });

      saveAccessToken(token);
      dispatch(setAuthUserActionCreator(user));
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: error.message,
      });
    }

    dispatch(hideLoading());
  };
}

export {
  ActionType,
  setAuthUserActionCreator,
  unsetAuthUserActionCreator,
  asyncSetAuthUser,
  asyncUnsetAuthUser,
  asyncRegisterUser,
};
