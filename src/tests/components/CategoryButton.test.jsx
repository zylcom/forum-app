/**
 * Scenario test
 *
 * - CategoryButton component
 *  - should render category name correctly
 *  - button should call the category change handler
 *  - button should have background color when current category equal to category name
 *  - should toggle background color when user clicked
 */

import React from "react";
import userEvent from "@testing-library/user-event";
import { render, screen } from "@testing-library/react";
import CategoryButton from "../../components/CategoryButton";

// dummy data
const category = "general";

describe("CategoryButton component", () => {
  it("should render category name correctly", () => {
    // arrange
    const categoryChangeHandler = vi.fn();

    render(<CategoryButton categoryName={category} categoryChangeHandler={categoryChangeHandler} currentCategory="" />);

    // action
    const categoryButton = screen.getByRole("button");

    // assert
    expect(categoryButton).toHaveTextContent(category);
  });

  it("should call the category change handler", async () => {
    // arrange
    const categoryChangeHandler = vi.fn();

    render(<CategoryButton categoryName={category} categoryChangeHandler={categoryChangeHandler} currentCategory="" />);

    const categoryButton = screen.getByRole("button");

    // action
    await userEvent.click(categoryButton);

    // assert
    expect(categoryChangeHandler).toBeCalledWith(category);
  });

  it("should have background color when current category equal to category name", () => {
    // arrange
    const categoryChangeHandler = vi.fn();
    const currentCategory = "general";

    render(
      <CategoryButton
        categoryName={category}
        categoryChangeHandler={categoryChangeHandler}
        currentCategory={currentCategory}
      />,
    );

    // action
    const categoryButton = screen.getByRole("button");

    // assert
    expect(categoryButton).toHaveClass("bg-fog-of-war");
  });

  it("should toggle background color when user clicked", async () => {
    // arrange
    let currentCategory = "test";
    const categoryChangeHandler = vi.fn().mockImplementation((categoryName) => {
      currentCategory = currentCategory === categoryName ? "" : categoryName;
    });

    const { rerender } = render(
      <CategoryButton
        categoryName={category}
        categoryChangeHandler={categoryChangeHandler}
        currentCategory={currentCategory}
      />,
    );

    const categoryButton = screen.getByRole("button");

    // action
    await userEvent.click(categoryButton);

    rerender(
      <CategoryButton
        categoryName={category}
        categoryChangeHandler={categoryChangeHandler}
        currentCategory={currentCategory}
      />,
    );

    // assert
    expect(categoryButton).toHaveClass("bg-fog-of-war");

    await userEvent.click(categoryButton);

    rerender(
      <CategoryButton
        categoryName={category}
        categoryChangeHandler={categoryChangeHandler}
        currentCategory={currentCategory}
      />,
    );

    expect(categoryButton).not.toHaveClass("bg-fog-of-war");
  });
});
