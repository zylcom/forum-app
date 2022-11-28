/**
 * Scenario test
 *
 * - authUserReducer
 *  - should return initialState when given by UNKNOWN action
 *  - should return auth user when given by SET_AUTH_USER action
 *  - should clear state when given by UNSET_AUTH_USER action
 */

import authUserReducer from "../../../states/authUser/reducer";

describe("authUser reducer", () => {
  it("should return initialState when given by UNKNOWN action", () => {
    // arrange
    const initialState = null;
    const action = { type: "UNKNOWN" };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return auth user when given by SET_AUTH_USER action", () => {
    // arrange
    const initialState = null;
    const authUser = {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    };
    const action = { type: "SET_AUTH_USER", payload: { authUser } };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.authUser);
  });

  it("should clear state when given by UNSET_AUTH_USER action", () => {
    // arrange
    const initialState = {
      id: "users-1",
      name: "John Doe",
      email: "john@example.com",
      avatar: "https://generated-image-url.jpg",
    };
    const action = { type: "UNSET_AUTH_USER" };

    // action
    const nextState = authUserReducer(initialState, action);

    // assert
    expect(nextState).toBeNull();
  });
});
