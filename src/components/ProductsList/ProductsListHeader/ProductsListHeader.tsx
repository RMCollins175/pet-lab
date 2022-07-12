export const ProductsListHeader = () => {
  return (
    <li className="product-item" data-testid="product-list-header">
      <div></div>
      <span data-testid="product-name-header">
        <strong>Title</strong>
      </span>
      <span data-testid="product-price-header">
        <strong>Price</strong>
      </span>
      <span data-testid="subscription-discount-header">
        <strong>Discount</strong>
      </span>
    </li>
  );
};
