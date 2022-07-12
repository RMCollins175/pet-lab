export const ProductsListHeader = () => {
  return (
    <li className="product-item" data-testID="product-list">
      <div></div>
      <span data-testID="product-name">
        <strong>Title</strong>
      </span>
      <span data-testID="product-price">
        <strong>Price</strong>
      </span>
      <span data-testID="subscription-discount">
        <strong>Discount</strong>
      </span>
    </li>
  );
};
