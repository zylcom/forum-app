/**
 * Scenario test
 *
 * - asyncVoteUpThreadDetail thunk
 *  - should call sweet alert when vote up thread api error
 *  - should call sweet alert when vote up thread api token expired
 *  - should dispatch action correctly when vote up thread api success
 *  - should dispatch neutralize vote action when vote up thread api fail
 *  - should rollback vote when fail vote thread detail
 */

import Swal from "sweetalert2";
import { afterEach, beforeEach } from "vitest";
import {
  asyncVoteUpThreadDetail,
  neutralizeVoteThreadDetailActionCreator,
  voteDownThreadDetailActionCreator,
  voteUpThreadDetailActionCreator,
} from "../../../states/threadDetail/action";
import * as api from "../../../utils";

// fake data
const threadDetail = {
  id: "thread-1",
  title: "Thread Pertama",
  body: "Ini adalah thread pertama",
  category: "General",
  createdAt: "2021-06-21T07:00:00.000Z",
  owner: {
    id: "users-1",
    name: "John Doe",
    email: "john@example.com",
    avatar: "https://generated-image-url.jpg",
  },
  upVotesBy: [],
  downVotesBy: [],
  comments: [
    {
      id: "comment-1",
      content: "Ini adalah komentar pertama",
      createdAt: "2021-06-21T07:00:00.000Z",
      owner: {
        id: "users-1",
        name: "John Doe",
        email: "john@example.com",
        avatar: "https://generated-image-url.jpg",
      },
      upVotesBy: [],
      downVotesBy: [],
    },
  ],
};

const authUser = {
  id: "users-1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

const fakeUpVoteThreadResponse = {
  id: "vote-1",
  userId: "users-1",
  threadId: "thread-1",
  voteType: 1,
};

const fakeErrorResponse = {
  normalError: new Error("Failed to vote up thread"),
  tokenExpiredError: new Error("Token maximum age exceeded"),
};

describe("asyncVoteUpThreadDetail thunk", () => {
  beforeEach(() => {
    // mock api utils
    vi.mock("../../../utils");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should call sweet alert when vote up thread api error", async () => {
    // arrange
    api.upVoteThread.mockRejectedValue(fakeErrorResponse.normalError);

    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();
    const getState = vi.fn();
    getState.mockReturnValue({ authUser, threadDetail });

    // action
    await asyncVoteUpThreadDetail(false)(dispatch, getState);

    // assert
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      text: fakeErrorResponse.normalError.message,
    });
  });

  it("should call sweet alert when vote up thread api token expired", async () => {
    // arrange
    api.upVoteThread.mockRejectedValue(fakeErrorResponse.tokenExpiredError);

    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();
    const getState = vi.fn();
    getState.mockReturnValue({ authUser, threadDetail });

    // action
    await asyncVoteUpThreadDetail(false)(dispatch, getState);

    // assert
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      html: `<b>${fakeErrorResponse.tokenExpiredError.message}</b> <br /> Please re-login`,
      confirmButtonText: "<a href='/login'>Sign In</a>",
      showCancelButton: true,
    });
  });

  it("should dispatch action correctly when vote up thread api success", async () => {
    // arrange
    api.upVoteThread.mockResolvedValue(fakeUpVoteThreadResponse);

    const spySweetAlert = vi.spyOn(Swal, "fire");
    const spyVoteUpApi = vi.spyOn(api, "upVoteThread");
    const dispatch = vi.fn();
    const getState = vi.fn();
    getState.mockReturnValue({ authUser, threadDetail });

    // action
    await asyncVoteUpThreadDetail(false)(dispatch, getState);

    // assert
    expect(spyVoteUpApi).toBeCalledWith(threadDetail.id);
    expect(spySweetAlert).not.toBeCalled();
    expect(dispatch).toBeCalledWith(
      voteUpThreadDetailActionCreator(authUser.id),
    );
    expect(dispatch).not.toBeCalledWith(
      voteDownThreadDetailActionCreator(authUser.id),
    );
    expect(dispatch).not.toBeCalledWith(
      neutralizeVoteThreadDetailActionCreator(authUser.id),
    );
  });

  it("should dispatch neutralize vote action when vote up thread api fail", async () => {
    // arrange
    api.upVoteThread.mockRejectedValue(fakeErrorResponse.normalError);

    const spyVoteUpApi = vi.spyOn(api, "upVoteThread");
    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();
    const getState = vi.fn();
    getState.mockReturnValue({ authUser, threadDetail });

    // action
    await asyncVoteUpThreadDetail(false)(dispatch, getState);

    // assert
    expect(spyVoteUpApi).toBeCalledWith(threadDetail.id);
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      text: fakeErrorResponse.normalError.message,
    });
    expect(dispatch).toBeCalledWith(
      voteUpThreadDetailActionCreator(authUser.id),
    );
    expect(dispatch).toBeCalledWith(
      neutralizeVoteThreadDetailActionCreator(authUser.id),
    );
    expect(dispatch).not.toBeCalledWith(
      voteDownThreadDetailActionCreator(authUser.id),
    );
  });

  it("should rollback vote when fail vote thread detail", async () => {
    // arrange
    api.upVoteThread.mockRejectedValue(fakeErrorResponse.normalError);

    const spyVoteUpApi = vi.spyOn(api, "upVoteThread");
    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();
    const getState = vi.fn();
    getState.mockReturnValue({ authUser, threadDetail });
    const isThreadVotedUp = true;

    // action
    await asyncVoteUpThreadDetail(isThreadVotedUp)(dispatch, getState);

    // assert
    expect(spyVoteUpApi).toBeCalledWith(threadDetail.id);
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      text: fakeErrorResponse.normalError.message,
    });
    expect(dispatch).toBeCalledWith(
      voteUpThreadDetailActionCreator(authUser.id),
    );
    expect(dispatch).toBeCalledWith(
      voteDownThreadDetailActionCreator(authUser.id),
    );
    expect(dispatch).not.toBeCalledWith(
      neutralizeVoteThreadDetailActionCreator(authUser.id),
    );
  });
});
