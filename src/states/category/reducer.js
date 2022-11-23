import { ActionType } from "./action";

function categoryReducer(category = "", action = {}) {
  switch (action.type) {
    case ActionType.SET_CATEGORY:
      return action.payload.category === category
        ? ""
        : action.payload.category;

    default:
      return category;
  }
}

export default categoryReducer;
