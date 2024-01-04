interface ProductsSearchInputProps {
  isLoading: boolean;
  setProductId: (arg0: string) => void;
  productId: string;
}

export const ProductsSearchInput = ({
  isLoading,
  setProductId,
  productId,
}: ProductsSearchInputProps) => {
  return (
    <div className="flex justify-end">
      <input
        aria-label="Search product"
        className="w-1/2 p-2.5 border border-gray-300 rounded text-lg bg-gray-100"
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Search products..."
        type="text"
        value={productId}
        data-testid="search-input"
      />
      {/* {isLoading && (
        <div className="loader-wrapper" data-testid="loading">
          <LoaderIcon />
        </div>
      )} */}
    </div>
  );
};
