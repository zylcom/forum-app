/**
 * Scenario test
 *
 * - asyncPreloadProcess thunk
 *  - should dispatch correctly when fetch api success
 *  - should dispatch correctly when fetch api failed
 */

import { hideLoading, showLoading } from "react-redux-loading-bar";
import { setAuthUserActionCreator } from "../../../states/authUser/action";
import * as api from "../../../utils";
import {
  asyncPreloadProcess,
  setIsPreloadActionCreator,
} from "../../../states/isPreload/action";

// dummy data
const fakeErrorResponse = new Error("Fetch API failed");
const authUser = {
  id: "users-1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

describe("asyncPreloadProcess thunk", () => {
  beforeEach(() => {
    // mock api utils
    vi.mock("../../../utils");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispatch correctly when fetch api success", async () => {
    // arrange
    api.getMyProfile.mockResolvedValue(authUser);

    const spyGetMyProfileApi = vi.spyOn(api, "getMyProfile");
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyGetMyProfileApi).toBeCalled();
    expect(dispatch).toBeCalledWith(setAuthUserActionCreator(authUser));
    expect(dispatch).toBeCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toBeCalledWith(hideLoading());
  });

  it("should dispatch correctly when fetch api failed", async () => {
    // arrange
    api.getMyProfile.mockRejectedValue(fakeErrorResponse);

    const spyGetMyProfileApi = vi.spyOn(api, "getMyProfile");
    const dispatch = vi.fn();

    // action
    await asyncPreloadProcess()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyGetMyProfileApi).toBeCalled();
    expect(dispatch).toBeCalledWith(setAuthUserActionCreator(null));
    expect(dispatch).toBeCalledWith(setIsPreloadActionCreator(false));
    expect(dispatch).toBeCalledWith(hideLoading());
  });
});
