// import { createComment } from "../../utils";

// const ActionType = {
//   ADD_COMMENT: "ADD_COMMENT",
//   TOGGLE_VOTE_UP_COMMENT: "TOGGLE_VOTE_UP_COMMENT",
//   TOGGLE_VOTE_DOWN_COMMENT: "TOGGLE_VOTE_DOWN_COMMENT",
// };

// function addCommentActionCreator(comment) {
//   return { type: ActionType.ADD_COMMENT, payload: { comment } };
// }

// function asyncAddComment({ threadId, content }) {
//   return async (dispatch) => {
//     try {
//       const comment = await createComment({ threadId, content });

//       dispatch(addCommentActionCreator(comment));
//     } catch (error) {
//       alert(error.message);
//     }
//   };
// }

// export { ActionType, addCommentActionCreator, asyncAddComment };
