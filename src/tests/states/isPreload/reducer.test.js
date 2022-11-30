/**
 * Scenario test
 *
 * - isPreLoadReducer
 *  - should return initial state when given by UNKNOWN action
 *  - should return isPreload when given by SET_IS_PRELOAD action
 */

import isPreLoadReducer from "../../../states/isPreload/reducer";

describe("isPreload reducer", () => {
  it("should return initial state when given by UNKNOWN action", () => {
    // arrange
    const initialState = true;
    const action = { type: "UNKNOWN" };

    // action
    const nextState = isPreLoadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(initialState);
  });

  it("should return isPreload when given by SET_IS_PRELOAD action", () => {
    // arrange
    const initialState = true;
    const action = { type: "SET_IS_PRELOAD", payload: { isPreload: false } };

    // action
    const nextState = isPreLoadReducer(initialState, action);

    // assert
    expect(nextState).toEqual(action.payload.isPreload);
  });
});
