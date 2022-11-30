/**
 * Scenario test
 *
 * - asyncReceiveLeaderboards thunk
 *  - should dispatch action correctly when success fetch api
 *  - should call sweet alert when getLeaderboards api error
 */

import Swal from "sweetalert2";
import { showLoading, hideLoading } from "react-redux-loading-bar";
import * as api from "../../../utils";
import {
  asyncReceiveLeaderboards,
  receiveLeaderboardsActionCreator,
} from "../../../states/leaderboards/action";

// dummy data
const fakeLeaderboardsResponse = [
  {
    user: {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 10,
  },
  {
    user: {
      id: "users-2",
      name: "Jane Doe",
      email: "jane@example.com",
      avatar: "https://generated-image-url.jpg",
    },
    score: 5,
  },
];
const fakeErrorResponse = new Error("Fetch Api failed");

describe("asyncReceiveLeaderboards thunk", () => {
  beforeEach(() => {
    // mock api utils
    vi.mock("../../../utils");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should dispatch action correctly when success fetch api", async () => {
    // arrange
    api.getLeaderboards.mockResolvedValue(fakeLeaderboardsResponse);

    const spyGetLeaderboardsApi = vi.spyOn(api, "getLeaderboards");
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyGetLeaderboardsApi).toBeCalled();
    expect(dispatch).toBeCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(dispatch).toBeCalledWith(hideLoading());
  });

  it("should call sweet alert when getLeaderboards api error", async () => {
    // arrange
    api.getLeaderboards.mockRejectedValue(fakeErrorResponse);

    const spyGetLeaderboardsApi = vi.spyOn(api, "getLeaderboards");
    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();

    // action
    await asyncReceiveLeaderboards()(dispatch);

    // assert
    expect(dispatch).toBeCalledWith(showLoading());
    expect(spyGetLeaderboardsApi).toBeCalled();
    expect(dispatch).not.toBeCalledWith(
      receiveLeaderboardsActionCreator(fakeLeaderboardsResponse),
    );
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      text: fakeErrorResponse.message,
    });
    expect(dispatch).toBeCalledWith(hideLoading());
  });
});
