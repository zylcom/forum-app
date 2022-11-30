/**
 * Scenario test
 *
 * - leaderboardsReducer
 *  - should return initial state when given by UNKNOWN action
 *  - should return leaderboards data when given by RECEIVE_LEADERBOARDS action
 */

import leaderboardsReducer from "../../../states/leaderboards/reducer";

describe("leaderboards reducer", () => {
  it("should return initial state when given by UNKNOWN action", () => {
    // arrange
    const initialState = [];
    const action = { type: "UNKNOWN" };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return leaderboards data when given by RECEIVE_LEADERBOARDS action", () => {
    // arrange
    const initialState = [];
    const action = {
      type: "RECEIVE_LEADERBOARDS",
      payload: {
        leaderboards: [
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
        ],
      },
    };

    // action
    const nextState = leaderboardsReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.leaderboards);
  });
});
