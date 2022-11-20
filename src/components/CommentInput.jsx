import React from "react";

function CommentInput() {
  return (
    <form className="p-5 flex border-b">
      <label htmlFor="comment" className="block relative mb-3 w-full">
        <span className="text-base block mb-2">Add a comment</span>
        <textarea
          name="comment"
          id="comment"
          className="rounded-lg h-18 resize-none w-full p-3 pl-1 focus:ring-0 focus:border focus:border-scuff-blue
          focus:outline-none font-medium bg-rurikon-blue text-white-edgar"
          placeholder="Text your comment ..."
          autoComplete="off"
          required
        />
      </label>

      <button
        type="submit"
        className="bg-clear-chill h-12 self-end m-5 px-3 rounded"
      >
        Add
      </button>
    </form>
  );
}

export default CommentInput;
