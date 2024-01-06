import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductsListHeader } from "../ProductsListHeader";

describe("ProductsListHeader Component", () => {
  test("renders headers correctly", () => {
    render(<ProductsListHeader />);

    // Using getByRole or getByText to find elements
    const headers = screen.getAllByRole("columnheader"); // if you use heading roles in your headers
    expect(headers[0]).toHaveTextContent("Title");
    expect(headers[1]).toHaveTextContent("Price");
    expect(headers[2]).toHaveTextContent("Discount");

    // Alternatively, use getByText for more specific queries
    expect(screen.getByText("Title")).toBeInTheDocument();
    expect(screen.getByText("Price")).toBeInTheDocument();
    expect(screen.getByText("Discount")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<ProductsListHeader />);
    expect(asFragment()).toMatchSnapshot();
  });
});
