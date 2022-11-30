/**
 * Scenario test
 *
 * - SubmitButton component
 *  - should render button text correctly
 *  - should call the submit handler callback
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import SubmitButton from "../../components/SubmitButton";

describe("SubmitButton component", () => {
  it("should render button text correctly", () => {
    // arrange
    const submitHandler = vi.fn();
    const text = "Submit";

    render(<SubmitButton text={text} submitHandler={submitHandler} />);

    // action
    const submitButtonElement = screen.getByRole("button");

    // assert
    expect(submitButtonElement).toHaveTextContent(text);
  });

  it("should call the submit handler callback", async () => {
    // arrange
    const submitHandler = vi.fn();
    const text = "Submit";

    render(<SubmitButton text={text} submitHandler={submitHandler} />);

    const submitButtonElement = screen.getByRole("button");

    // action
    await userEvent.click(submitButtonElement);

    // assert
    expect(submitHandler).toBeCalledTimes(1);
  });
});
