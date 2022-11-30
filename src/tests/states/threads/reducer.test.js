/**
 * Scenario test
 *
 * - threadsReducer
 *  - should return initial state when given by UNKNOWN action
 *  - should return state with new thread when given by ADD_THREAD action
 *  - should return threads must contain given user id in upVotesBy property
 *    in thread have id 'thread-1' when given by VOTE_UP_THREAD action
 *  - should return threads must contain given user id in downVotesBy property
 *    in thread have id 'thread-1' when given by VOTE_DOWN_THREAD action
 *  - should return threads must not contain given user id in upVotesBy and downVotesBy
 *    property in thread have id 'thread-1' when given by NEUTRALIZE_THREAD_VOTE action
 */

import threadsReducer from "../../../states/threads/reducer";

// dummy data
const user = {
  id: "users-1",
  name: "John Doe",
  email: "john@example.com",
  avatar: "https://generated-image-url.jpg",
};

const user2 = {
  id: "users-2",
  name: "Jane Doe",
  email: "jane@example.com",
  avatar: "https://generated-image-url.jpg",
};

describe("threads reducer", () => {
  it("should return initial state when given by UNKNOWN action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return state with new thread when given by ADD_THREAD action", () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: "ADD_THREAD",
      payload: {
        thread: {
          id: "thread-2",
          title: "Thread Kedua",
          body: "Ini adalah thread kedua",
          category: "General",
          createdAt: "2021-11-21T07:00:00.000Z",
          ownerId: "users-1",
          upVotesBy: [],
          downVotesBy: [],
          totalComments: 0,
        },
      },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([action.payload.thread, ...initialState]);
  });

  it(`should return threads must contain given user id in upVotesBy property 
      in thread have id 'thread-1' when given by VOTE_UP_THREAD action`, () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: "VOTE_UP_THREAD",
      payload: { threadId: initialState[0].id, userId: user.id },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        upVotesBy: [...initialState[0].upVotesBy, action.payload.userId],
      },
    ]);
  });

  it(`should return threads must contain given user id in downVotesBy property 
      in thread have id 'thread-1' when given by VOTE_DOWN_THREAD action`, () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [],
        downVotesBy: [],
        totalComments: 0,
      },
    ];
    const action = {
      type: "VOTE_DOWN_THREAD",
      payload: { threadId: initialState[0].id, userId: user2.id },
    };

    // action
    const nextState = threadsReducer(initialState, action);

    // assert
    expect(nextState).toEqual([
      {
        ...initialState[0],
        downVotesBy: [...initialState[0].downVotesBy, action.payload.userId],
      },
    ]);
  });

  it(`should return threads must not contain given user id in upVotesBy and downVotesBy property 
      in thread have id 'thread-1' when given by NEUTRALIZE_THREAD_VOTE action`, () => {
    // arrange
    const initialState = [
      {
        id: "thread-1",
        title: "Thread Pertama",
        body: "Ini adalah thread pertama",
        category: "General",
        createdAt: "2021-06-21T07:00:00.000Z",
        ownerId: "users-1",
        upVotesBy: [user.id],
        downVotesBy: [user2.id],
        totalComments: 0,
      },
    ];
    const action = {
      type: "NEUTRALIZE_THREAD_VOTE",
      payload: { threadId: initialState[0].id, userId: user.id },
    };
    const action2 = {
      type: "NEUTRALIZE_THREAD_VOTE",
      payload: { threadId: initialState[0].id, userId: user2.id },
    };

    // action
    const nextState = threadsReducer(initialState, action);
    const nextState2 = threadsReducer(initialState, action2);

    // assert
    expect(nextState[0].upVotesBy).toEqual([]);
    expect(nextState2[0].downVotesBy).toEqual([]);
  });
});
