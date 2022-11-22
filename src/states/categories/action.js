import { extractAllCategoryFromThreads } from "../../utils";

const ActionType = {
  RECEIVE_CATEGORIES: "RECEIVE_CATEGORIES",
};

function receiveCategoriesActionCreator(categories) {
  return { type: ActionType.RECEIVE_CATEGORIES, payload: { categories } };
}

function asyncReceiveCategories(threads) {
  return (dispatch) => {
    const categories = extractAllCategoryFromThreads(threads);

    dispatch(receiveCategoriesActionCreator(categories));
  };
}

export { ActionType, receiveCategoriesActionCreator, asyncReceiveCategories };
