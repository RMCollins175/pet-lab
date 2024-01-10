import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { ProductItem } from "../ProductItem";
import { getDiscount } from "../../utilities/getDiscount";
import { ProductType } from "../../ProductsList/ProductsList";

describe("ProductItem Component", () => {
  const mockProduct: ProductType = {
    id: 1,
    slug: "test-product",
    title: "Test Product",
    vendor: "Test Vendor",
    tags: ["tag1", "tag2"],
    published: true,
    url: "http://example.com",
    image_src: "test-image.jpg",
    option_value: "option1",
    sku: "SKU123",
    price: 20,
    subscription_discount: 10,
    subscription: true,
  };

  test("renders product information correctly", () => {
    render(<ProductItem product={mockProduct} />);
    expect(screen.getByText(mockProduct.title)).toBeInTheDocument();
    expect(screen.getByText(`£${mockProduct.price}`)).toBeInTheDocument();
    expect(
      screen.getByText(getDiscount(mockProduct.subscription_discount))
    ).toBeInTheDocument();
    expect(screen.getByAltText(mockProduct.title)).toHaveAttribute(
      "src",
      mockProduct.image_src
    );
  });

  test("renders an image with correct attributes", () => {
    render(<ProductItem product={mockProduct} key={mockProduct.id} />);

    const image = screen.getByAltText(mockProduct.title);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProduct.image_src);
    expect(image).toHaveAttribute("height", "50");
  });

  test("matches snapshot", () => {
    const { asFragment } = render(
      <ProductItem product={mockProduct} key={mockProduct.id} />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
