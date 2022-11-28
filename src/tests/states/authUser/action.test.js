/**
 * Scenario test
 *
 * - asyncSetAuthUser thunk
 *  - should dispatch action correctly when api login success
 *  - should call sweet alert when api error
 */

import Swal from "sweetalert2";
import { afterEach, beforeEach } from "vitest";
import { hideLoading, showLoading } from "react-redux-loading-bar";
import * as api from "../../../utils";
import {
  asyncSetAuthUser,
  setAuthUserActionCreator,
} from "../../../states/authUser/action";

// dummy data
const fakeLoginResponse = "secret-token";
const fakeErrorResponse = new Error("User not found");
const user = {
  id: "users-1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

describe("asyncSetAuthUser thunk", () => {
  beforeEach(() => {
    // mock api utils
    vi.mock("../../../utils");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispatch action correctly when api login success", async () => {
    // arrange
    api.login.mockResolvedValue(fakeLoginResponse);
    api.getMyProfile.mockResolvedValue(user);

    const spySweetAlert = vi.spyOn(Swal, "fire");
    const spyLoginApi = vi.spyOn(api, "login");
    const spySaveAccessToken = vi.spyOn(api, "saveAccessToken");
    const spyGetMyProfile = vi.spyOn(api, "getMyProfile");
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({ email: user.email, password: "password" })(
      dispatch,
    );

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyLoginApi).toBeCalledWith({
      email: user.email,
      password: "password",
    });
    expect(spySaveAccessToken).toBeCalledWith(fakeLoginResponse);
    expect(spyGetMyProfile).toBeCalled();
    expect(dispatch).toBeCalledWith(setAuthUserActionCreator(user));
    expect(spySweetAlert).not.toBeCalled();
    expect(dispatch).toBeCalledWith(hideLoading());
  });

  it("should call sweet alert when api error", async () => {
    // arrange
    api.login.mockRejectedValue(fakeErrorResponse);

    const spySweetAlert = vi.spyOn(Swal, "fire");
    const spyLoginApi = vi.spyOn(api, "login");
    const spySaveAccessToken = vi.spyOn(api, "saveAccessToken");
    const spyGetMyProfile = vi.spyOn(api, "getMyProfile");
    const dispatch = vi.fn();

    // action
    await asyncSetAuthUser({ email: user.email, password: "password" })(
      dispatch,
    );

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyLoginApi).toBeCalledWith({
      email: user.email,
      password: "password",
    });
    expect(spySaveAccessToken).not.toBeCalled();
    expect(spyGetMyProfile).not.toBeCalled();
    expect(dispatch).not.toBeCalledWith(setAuthUserActionCreator(user));
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      text: fakeErrorResponse.message,
    });
    expect(dispatch).toBeCalledWith(hideLoading());
  });
});
