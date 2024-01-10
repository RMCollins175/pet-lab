import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductsListHeader } from "../ProductsListHeader";
import { dummyProducts } from "../../ProductsList/__test__/ProductsList.test";

describe("ProductsListHeader Component", () => {
  test("renders headers correctly", () => {
    render(<ProductsListHeader numberOfProdcuts={dummyProducts.length} />);

    const headers = screen.getAllByRole("columnheader");
    expect(headers[0]).toHaveTextContent("2 Products");
    expect(headers[1]).toHaveTextContent("Title");
    expect(headers[2]).toHaveTextContent("Price");
    expect(headers[3]).toHaveTextContent("Discount");

    // expect(screen.getByText("Title")).toBeInTheDocument();
    // expect(screen.getByText("Price")).toBeInTheDocument();
    // expect(screen.getByText("Discount")).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ProductsListHeader numberOfProdcuts={dummyProducts.length} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
