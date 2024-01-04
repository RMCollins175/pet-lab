export const ProductsListHeader = () => {
  return (
    <li
      className="grid justify-center grid-cols-[0.2fr_1.5fr_0.5fr_0.5fr] p-4 border-b border-gray-300 cursor-pointer"
      data-testid="product-list-header">
      <div></div>
      <span
        className="flex items-center justify-center"
        data-testid="product-name-header">
        <strong>Title</strong>
      </span>

      <span
        className="flex items-center justify-center"
        data-testid="product-price-header">
        <strong>Price</strong>
      </span>

      <span
        className="flex items-center justify-center"
        data-testid="subscription-discount-header">
        <strong>Discount</strong>
      </span>
    </li>
  );
};
