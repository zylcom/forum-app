import React from "react";
import PropTypes from "prop-types";

function SubmitButton({ text, submitHandler }) {
  return (
    <button
      type="submit"
      className="bg-clear-chill w-full rounded h-12 text-white-edgar"
      onClick={submitHandler}
    >
      {text}
    </button>
  );
}

SubmitButton.propTypes = {
  text: PropTypes.string.isRequired,
  submitHandler: PropTypes.func,
};

export default SubmitButton;
