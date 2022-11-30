/**
 * Scenario test
 *
 * - asyncAddThread thunk
 *  - should call sweet alert when create thread api error
 *  - should call sweet alert when create thread api token expired
 *  - should dispatch action correctly when create thread api success
 */

import Swal from "sweetalert2";
import * as api from "../../../utils";
import {
  addThreadActionCreator,
  asyncAddThread,
} from "../../../states/threads/action";

// dummy data
const fakeCreateThreadResponse = {
  id: "thread-1",
  title: "Thread Pertama",
  body: "Ini adalah thread pertama",
  category: "General",
  createdAt: "2021-06-21T07:00:00.000Z",
  ownerId: "users-1",
  upVotesBy: [],
  downVotesBy: [],
  totalComments: 0,
};
const fakeErrorResponse = {
  normalError: new Error("Failed to create thread"),
  tokenExpiredError: new Error("Token maximum age exceeded"),
};

describe("asyncAddThread thunk", () => {
  beforeEach(() => {
    // mock api utils
    vi.mock("../../../utils");
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it("should call sweet alert when create thread api error", async () => {
    // arrange
    api.createThread.mockRejectedValue(fakeErrorResponse.normalError);

    const spyCreateThreadApi = vi.spyOn(api, "createThread");
    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title: fakeCreateThreadResponse.title,
      body: fakeCreateThreadResponse.body,
      category: fakeCreateThreadResponse.category,
    })(dispatch);

    // assert
    expect(spyCreateThreadApi).toBeCalledWith({
      title: fakeCreateThreadResponse.title,
      body: fakeCreateThreadResponse.body,
      category: fakeCreateThreadResponse.category,
    });
    expect(dispatch).not.toBeCalledWith(
      addThreadActionCreator(fakeCreateThreadResponse),
    );
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      text: fakeErrorResponse.normalError.message,
    });
  });

  it("should call sweet alert when create thread api token expired", async () => {
    // arrange
    api.createThread.mockRejectedValue(fakeErrorResponse.tokenExpiredError);

    const spyCreateThreadApi = vi.spyOn(api, "createThread");
    const spySweetAlert = vi.spyOn(Swal, "fire");
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title: fakeCreateThreadResponse.title,
      body: fakeCreateThreadResponse.body,
      category: fakeCreateThreadResponse.category,
    })(dispatch);

    // assert
    expect(spyCreateThreadApi).toBeCalledWith({
      title: fakeCreateThreadResponse.title,
      body: fakeCreateThreadResponse.body,
      category: fakeCreateThreadResponse.category,
    });
    expect(dispatch).not.toBeCalledWith(
      addThreadActionCreator(fakeCreateThreadResponse),
    );
    expect(spySweetAlert).toBeCalledWith({
      icon: "error",
      title: "Oops...",
      html: `<b>${fakeErrorResponse.tokenExpiredError.message}</b> <br /> Please re-login`,
      confirmButtonText: "<a href='/login'>Sign In</a>",
      showCancelButton: true,
    });
  });

  it("should dispatch action correctly when create thread api success", async () => {
    // arrange
    api.createThread.mockResolvedValue(fakeCreateThreadResponse);

    const spyCreateThreadApi = vi.spyOn(api, "createThread");
    const dispatch = vi.fn();

    // action
    await asyncAddThread({
      title: fakeCreateThreadResponse.title,
      body: fakeCreateThreadResponse.body,
      category: fakeCreateThreadResponse.category,
    })(dispatch);

    // assert
    expect(spyCreateThreadApi).toBeCalledWith({
      title: fakeCreateThreadResponse.title,
      body: fakeCreateThreadResponse.body,
      category: fakeCreateThreadResponse.category,
    });
    expect(dispatch).toBeCalledWith(
      addThreadActionCreator(fakeCreateThreadResponse),
    );
  });
});
