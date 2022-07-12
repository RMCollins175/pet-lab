export const ProductsListHeader = () => {
  return (
    <li className="product-item" data-testid="product-list">
      <div></div>
      <span data-testid="product-name">
        <strong>Title</strong>
      </span>
      <span data-testid="product-price">
        <strong>Price</strong>
      </span>
      <span data-testid="subscription-discount">
        <strong>Discount</strong>
      </span>
    </li>
  );
};
