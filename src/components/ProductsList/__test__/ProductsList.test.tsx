import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductType, ProductsList } from "../ProductsList";

export const dummyProducts = [
  {
    id: 1,
    slug: "joint-chews-for-dogs",
    title: "Joint Care Chews",
    vendor: "PetLab",
    tags: ["Chews", "Dog"],
    published: true,
    url: "https://thepetlabco.com/products/joint-chews-for-dogs",
    image_src: "https://via.placeholder.com/300x300.png?text=Joint+Care+Chews",
    option_value: "Single Pack",
    sku: "JCSC1",
    price: 42.29,
    subscription_discount: 25,
    subscription: true,
  },
  {
    id: 2,
    slug: "skin-chews",
    title: "Dental Chews (Rawhide)",
    vendor: "PetLab",
    tags: ["Chews", "Dog"],
    published: true,
    url: "https://thepetlabco.com/products/skin-coat",
    image_src: "https://via.placeholder.com/300x300.png?text=Dental+Chews",
    option_value: "Single Pack",
    sku: "DHC1",
    price: 29.95,
    subscription_discount: 25,
    subscription: true,
  },
] as ProductType[];

describe("ProductsList Component", () => {
  const mockProducts = dummyProducts;

  test("renders without crashing", () => {
    render(<ProductsList products={[]} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  // test("displays products when list is not empty", () => {
  //   render(<ProductsList products={mockProducts} />);
  //   expect(screen.getAllByRole("listitem").length).toBe(mockProducts.length);
  // });

  // test("handles empty product list", () => {
  //   render(<ProductsList products={[]} />);
  //   expect(screen.queryByRole("listitem")).toBeNull();
  // });

  // Snapshot Test
  test("matches snapshot", () => {
    const { asFragment } = render(<ProductsList products={mockProducts} />);
    expect(asFragment()).toMatchSnapshot();
  });
});
