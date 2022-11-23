import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import useInput from "../hooks/useInput";
import SubmitButton from "./SubmitButton";
import { asyncAddThread } from "../states/threads/action";

function CreateThreadInput() {
  const [title, onTitleChange] = useInput("");
  const [category, onCategoryChange] = useInput("");
  const [content, onContentChange] = useInput("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function createThread(e) {
    e.preventDefault();

    dispatch(asyncAddThread({ title, body: content, category }));
    navigate("/");
  }

  return (
    <form className="px-5 md:w-3/5 max-w-[1000px] mx-auto">
      <label htmlFor="title" className="block">
        Title
      </label>
      <input
        type="text"
        name="title"
        id="title"
        className="w-full h-10 p-2 bg-rurikon-blue focus:outline-none"
        placeholder="Text Your Title..."
        value={title}
        onChange={onTitleChange}
        autoComplete="off"
        required
      />

      <label htmlFor="category" className="block mt-5">
        Category
      </label>
      <input
        type="text"
        name="category"
        id="category"
        className="w-full h-10 p-2 bg-rurikon-blue focus:outline-none"
        placeholder="Text Your Category..."
        value={category}
        onChange={onCategoryChange}
        autoComplete="off"
      />

      <label htmlFor="body" className="block mt-5">
        Content
      </label>
      <textarea
        name="body"
        id="body"
        className="w-full p-2 bg-rurikon-blue focus:outline-none"
        placeholder="Text Your Content..."
        rows="6"
        value={content}
        onChange={onContentChange}
        required
      />

      <SubmitButton text="Create" submitHandler={createThread} />
    </form>
  );
}

export default CreateThreadInput;
