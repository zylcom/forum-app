/**
 * Scenario test
 *
 * - threadDetail reducer
 *  - should return initial state when given by UNKNOWN action
 *  - should return threadDetail when given by RECEIVE_THREAD_DETAIL action
 *  - should clear state when given by CLEAR_THREAD_DETAIL action
 *  - should return threadDetail must contain given user id in upVotesBy
 *    property when given by VOTE_UP_THREAD_DETAIL action
 *  - should return threadDetail must contain given user id in downVotesBy
 *    property when given by VOTE_DOWN_THREAD_DETAIL action
 *  - should return threadDetail must not contain given user id in upVotesBy and
 *    downVotesBy property when given by NEUTRALIZE_THREAD_DETAIL_VOTE
 *  - should return threadDetail with new comment when given by ADD_COMMENT action
 *  - should return threadDetail must contain given user id in first comment
 *    in upVotesBy property when given by VOTE_UP_COMMENT action
 *  - should return threadDetail must contain given user id in first comment
 *    in downVotesBy property when given by VOTE_DOWN_COMMENT action
 *  - should return threadDetail must not contain given user id in first comment in
 *    upVotesBy and downVotesBy property when given by NEUTRALIZE_COMMENT_VOTE
 */

import threadDetailReducer from "../../../states/threadDetail/reducer";

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

describe("threadDetail reducer", () => {
  it("should return initial state when given by UNKNOWN action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNOWN" };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return threadDetail when given by RECEIVE_THREAD_DETAIL action", () => {
    // arrange
    const initialState = null;
    const action = {
      type: "RECEIVE_THREAD_DETAIL",
      payload: {
        threadDetail: {
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
        },
      },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.threadDetail);
  });

  it("should clear state when given by CLEAR_THREAD_DETAIL action", () => {
    // arrange
    const initialState = {
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
    const action = { type: "CLEAR_THREAD_DETAIL" };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });

  it(`should return threadDetail must contain given user id in upVotesBy property 
      when given by VOTE_UP_THREAD_DETAIL action`, () => {
    // arrange
    const initialState = {
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
    const action = {
      type: "VOTE_UP_THREAD_DETAIL",
      payload: { userId: user.id },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.upVotesBy).toEqual([action.payload.userId]);
  });

  it(`should return threadDetail must contain given user id in downVotesBy property 
      when given by VOTE_DOWN_THREAD_DETAIL action`, () => {
    // arrange
    const initialState = {
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
    const action = {
      type: "VOTE_DOWN_THREAD_DETAIL",
      payload: { userId: user.id },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.downVotesBy).toEqual([action.payload.userId]);
  });

  it(`should return threadDetail must not contain given user id in upVotesBy and 
      downVotesBy property when given by NEUTRALIZE_THREAD_DETAIL_VOTE`, () => {
    // arrange
    const initialState = {
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
      upVotesBy: [user.id],
      downVotesBy: [user2.id],
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
    const action = {
      type: "NEUTRALIZE_THREAD_DETAIL_VOTE",
      payload: { userId: user.id },
    };
    const action2 = {
      type: "NEUTRALIZE_THREAD_DETAIL_VOTE",
      payload: { userId: user2.id },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);
    const nextState2 = threadDetailReducer(nextState, action2);

    // assert
    expect(nextState.upVotesBy).toEqual([]);
    expect(nextState2.downVotesBy).toEqual([]);
  });

  it("should return threadDetail with new comment when given by ADD_COMMENT action", () => {
    // arrange
    const initialState = {
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
    const comment = {
      id: "comment-2",
      content: "Ini adalah komentar kedua",
      createdAt: "2022-11-28T07:00:00.000Z",
      owner: {
        ...user2,
      },
      upVotesBy: [],
      downVotesBy: [],
    };
    const action = { type: "ADD_COMMENT", payload: { comment } };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments).toEqual([comment, ...initialState.comments]);
  });

  it(`should return threadDetail must contain given user id in first comment in upVotesBy property
      when given by VOTE_UP_COMMENT action`, () => {
    // arrange
    const initialState = {
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
    const action = {
      type: "VOTE_UP_COMMENT",
      payload: { commentId: "comment-1", userId: user.id },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments[0].upVotesBy).toEqual([action.payload.userId]);
  });

  it(`should return threadDetail must contain given user id in first comment in downVotesBy property
      when given by VOTE_DOWN_COMMENT action`, () => {
    // arrange
    const initialState = {
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
    const action = {
      type: "VOTE_DOWN_COMMENT",
      payload: { commentId: "comment-1", userId: user.id },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);

    // assert
    expect(nextState.comments[0].downVotesBy).toEqual([action.payload.userId]);
  });

  it(`should return threadDetail must not contain given user id in first comment in upVotesBy and 
      downVotesBy property when given by NEUTRALIZE_COMMENT_VOTE`, () => {
    // arrange
    const initialState = {
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
          upVotesBy: [user.id],
          downVotesBy: [user2.id],
        },
      ],
    };
    const action = {
      type: "NEUTRALIZE_COMMENT_VOTE",
      payload: { commentId: "comment-1", userId: user.id },
    };
    const action2 = {
      type: "NEUTRALIZE_COMMENT_VOTE",
      payload: { commentId: "comment-1", userId: user2.id },
    };

    // action
    const nextState = threadDetailReducer(initialState, action);
    const nextState2 = threadDetailReducer(nextState, action2);

    // assert
    expect(nextState.comments[0].upVotesBy).toEqual([]);
    expect(nextState2.comments[0].downVotesBy).toEqual([]);
  });
});
