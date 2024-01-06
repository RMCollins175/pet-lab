export const ProductsListHeader = () => {
  return (
    <li className="grid justify-center grid-cols-[0.2fr_1.5fr_0.5fr_0.5fr] p-4 border-b border-gray-300 cursor-pointer">
      <div></div>
      <span
        className="flex items-center justify-center"
        aria-label="Title"
        role="columnheader">
        <strong>Title</strong>
      </span>

      <span
        className="flex items-center justify-center"
        aria-label="Price"
        role="columnheader">
        <strong>Price</strong>
      </span>

      <span
        className="flex items-center justify-center"
        aria-label="Discount"
        role="columnheader">
        <strong>Discount</strong>
      </span>
    </li>
  );
};
