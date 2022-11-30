/**
 * Scenario test
 *
 * - VoteUpButton component
 *  - should render total votes up correctly
 *  - button icon should have no color when not voted
 *  - button icon color should be changed when user vote up
 *  - button should call the vote up handler when user clicked
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import VoteUpButton from "../../components/VoteUpButton";

let isVoted = false;
const totalVotesUp = 10;
const color = "#1d90f4";

describe("VoteUpButton component", () => {
  it("should render total votes up correctly", () => {
    // arrange
    const voteUpHandler = vi.fn();

    render(
      <VoteUpButton
        voteUp={voteUpHandler}
        isVoted={isVoted}
        totalVotesUp={totalVotesUp}
      />,
    );

    // action
    const voteUpButtonElement = screen.getByRole("button");

    // assert
    expect(voteUpButtonElement).toHaveTextContent(totalVotesUp);
  });

  it("should have no color when not voted", () => {
    // arrange
    const voteUpHandler = vi.fn();

    render(
      <VoteUpButton
        voteUp={voteUpHandler}
        isVoted={isVoted}
        totalVotesUp={totalVotesUp}
      />,
    );

    // action
    const voteUpButtonElement = screen.getByRole("button");
    const svgElement = voteUpButtonElement.firstChild;

    // assert
    expect(svgElement).toHaveAttribute("fill", "none");
  });

  it("should change color when user vote up", async () => {
    // arrange
    const voteUpHandler = vi.fn().mockImplementation(() => {
      isVoted = true;
    });

    const { rerender } = render(
      <VoteUpButton
        voteUp={voteUpHandler}
        isVoted={isVoted}
        totalVotesUp={totalVotesUp}
      />,
    );
    const voteUpButtonElement = screen.getByRole("button");
    const svgElement = voteUpButtonElement.firstChild;

    // action
    await userEvent.click(voteUpButtonElement);

    rerender(
      <VoteUpButton
        voteUp={voteUpHandler}
        isVoted={isVoted}
        totalVotesUp={totalVotesUp}
      />,
    );

    // assert
    expect(voteUpHandler).toBeCalledTimes(1);
    expect(svgElement).toHaveAttribute("fill", color);
  });

  it("should call the voteUpHandler callback", async () => {
    // arrange
    const voteUpHandler = vi.fn();

    render(
      <VoteUpButton
        voteUp={voteUpHandler}
        isVoted={isVoted}
        totalVotesUp={totalVotesUp}
      />,
    );

    const voteUpButtonElement = screen.getByRole("button");

    // action
    await userEvent.click(voteUpButtonElement);

    // assert
    expect(voteUpHandler).toBeCalledTimes(1);
  });
});
