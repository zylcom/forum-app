import { ActionType } from "./action";

function categoriesReducer(categories = [], action = {}) {
  switch (action.type) {
    case ActionType.RECEIVE_CATEGORIES:
      return action.payload.categories;

    default:
      return categories;
  }
}

export default categoriesReducer;
