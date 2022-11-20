import React from "react";

function CreateThreadPage() {
  return (
    <div className="py-16 text-white">
      <h2 className="text-center text-3xl mb-5">Create New Thread</h2>

      <form action="" className="px-5">
        <label htmlFor="title" className="block">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="w-full h-10 p-2 bg-rurikon-blue focus:outline-none"
          placeholder="Text Your Title..."
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
          required
        />

        <label htmlFor="body" className="block mt-5">
          Content
        </label>
        <textarea
          name="body"
          id="body"
          className="w-full p-2 bg-rurikon-blue focus:outline-none"
          placeholder="Text Your Content..."
          rows="10"
          required
        />

        <button
          type="submit"
          className="w-full bg-clear-chill mt-5 rounded p-3"
        >
          Create
        </button>
      </form>
    </div>
  );
}

export default CreateThreadPage;
