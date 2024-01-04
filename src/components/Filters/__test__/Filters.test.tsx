import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Filters } from "../Filters";

describe("Filters Component", () => {
  test("renders all form elements", () => {
    const mockHandleSearch = jest.fn();
    render(<Filters handleSearch={mockHandleSearch} loading={false} />);

    expect(screen.getByTestId("tag-label")).toBeInTheDocument();
    expect(screen.getByTestId("price-label")).toBeInTheDocument();
    expect(screen.getByTestId("subscription-label")).toBeInTheDocument();
    expect(screen.getByTestId("search-button")).toBeInTheDocument();
    expect(screen.getByTestId("reset-button")).toBeInTheDocument();
  });

  test("allows input to be entered", () => {
    const mockHandleSearch = jest.fn();
    render(<Filters handleSearch={mockHandleSearch} loading={false} />);

    const tagInput = screen.getByLabelText("Tag:") as HTMLInputElement;
    fireEvent.change(tagInput, { target: { value: "test tag" } });
    expect(tagInput.value).toBe("test tag");

    const priceInput = screen.getByLabelText("Price:") as HTMLInputElement;
    fireEvent.change(priceInput, { target: { value: 100 } });
    expect(priceInput.value).toBe("100");
  });

  test("submits form with correct data", async () => {
    const mockHandleSearch = jest.fn();
    render(<Filters handleSearch={mockHandleSearch} loading={false} />);

    fireEvent.change(screen.getByLabelText("Tag:"), {
      target: { value: "test tag" },
    });
    fireEvent.change(screen.getByLabelText("Price:"), {
      target: { value: 100 },
    });
    fireEvent.click(screen.getByTestId("search-button"));

    await waitFor(() => {
      expect(mockHandleSearch).toHaveBeenCalled();
    });
  });

  // test("disables search button when loading", () => {
  //   const mockHandleSearch = jest.fn();
  //   render(<Filters handleSearch={mockHandleSearch} loading={true} />);

  //   expect(screen.getByText("Search")).toBeDisabled();
  // });

  test("resets form fields", () => {
    const mockHandleSearch = jest.fn();
    render(<Filters handleSearch={mockHandleSearch} loading={false} />);

    const tagInput = screen.getByLabelText("Tag:") as HTMLInputElement;
    fireEvent.change(tagInput, { target: { value: "test tag" } });
    fireEvent.click(screen.getByTestId("reset-button"));

    expect(tagInput.value).toBe("");
  });
});

describe("Filters Component Snapshot", () => {
  it("should match the snapshot", () => {
    const mockHandleSearch = jest.fn();
    const { asFragment } = render(
      <Filters handleSearch={mockHandleSearch} loading={false} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
