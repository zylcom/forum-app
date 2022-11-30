/**
 * Scenario test
 *
 * - VoteDownButton component
 *  - should render total votes down correctly
 *  - button icon should have no color when not voted
 *  - button icon color should be changed when user vote down
 *  - button should call the vote down handler when user clicked
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import { screen, render } from "@testing-library/react";
import VoteDownButton from "../../components/VoteDownButton";

let isVoted = false;
const totalVotesDown = 10;
const color = "#c70039";

describe("VoteDownButton component", () => {
  it("should render total votes down correctly", () => {
    // arrange
    const voteDownHandler = vi.fn();

    render(
      <VoteDownButton
        voteDown={voteDownHandler}
        isVoted={isVoted}
        totalVotesDown={totalVotesDown}
      />,
    );

    // action
    const voteDownButtonElement = screen.getByRole("button");

    // assert
    expect(voteDownButtonElement).toHaveTextContent(totalVotesDown);
  });

  it("should have no color when not voted", () => {
    // arrange
    const voteDownHandler = vi.fn();

    render(
      <VoteDownButton
        voteDown={voteDownHandler}
        isVoted={isVoted}
        totalVotesDown={totalVotesDown}
      />,
    );

    // action
    const voteDownButtonElement = screen.getByRole("button");
    const svgElement = voteDownButtonElement.firstChild;

    // assert
    expect(svgElement).toHaveAttribute("fill", "none");
  });

  it("should change color when user vote down", async () => {
    // arrange
    const voteDownHandler = vi.fn().mockImplementation(() => {
      isVoted = true;
    });

    const { rerender } = render(
      <VoteDownButton
        voteDown={voteDownHandler}
        isVoted={isVoted}
        totalVotesDown={totalVotesDown}
      />,
    );
    const voteDownButtonElement = screen.getByRole("button");
    const svgElement = voteDownButtonElement.firstChild;

    // action
    await userEvent.click(voteDownButtonElement);

    rerender(
      <VoteDownButton
        voteDown={voteDownHandler}
        isVoted={isVoted}
        totalVotesDown={totalVotesDown}
      />,
    );

    // assert
    expect(voteDownHandler).toBeCalledTimes(1);
    expect(svgElement).toHaveAttribute("fill", color);
  });

  it("should call the voteDownHandler callback", async () => {
    // arrange
    const voteDownHandler = vi.fn();

    render(
      <VoteDownButton
        voteDown={voteDownHandler}
        isVoted={isVoted}
        totalVotesDown={totalVotesDown}
      />,
    );

    const voteDownButtonElement = screen.getByRole("button");

    // action
    await userEvent.click(voteDownButtonElement);

    // assert
    expect(voteDownHandler).toBeCalledTimes(1);
  });
});
