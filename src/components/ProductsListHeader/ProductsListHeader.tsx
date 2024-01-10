interface ProductsListHeaderProps {
  numberOfProdcuts: number;
}

export const ProductsListHeader = ({
  numberOfProdcuts,
}: ProductsListHeaderProps) => {
  return (
    <li className="grid justify-center grid-cols-[0.2fr_1.5fr_0.5fr_0.5fr] p-4 border-b border-gray-300 cursor-pointer">
      <th
        className="flex items-center justify-center text-nowrap"
        aria-label="Title"
        role="columnheader">
        {numberOfProdcuts} Products
      </th>
      <th
        className="flex items-center justify-center"
        aria-label="Title"
        role="columnheader">
        <strong>Title</strong>
      </th>

      <th
        className="flex items-center justify-center"
        aria-label="Price"
        role="columnheader">
        <strong>Price</strong>
      </th>

      <th
        className="flex items-center justify-center"
        aria-label="Discount"
        role="columnheader">
        <strong>Discount</strong>
      </th>
    </li>
  );
};
