const ActionType = {
  SET_CATEGORY: "SET_CATEGORY",
};

function setCategoryActionCreator(category) {
  return { type: ActionType.SET_CATEGORY, payload: { category } };
}

export { ActionType, setCategoryActionCreator };
