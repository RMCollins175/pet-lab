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
    <div className="product-search-input-wrapper">
      <input
        aria-label="Search product"
        className="product-search-input"
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
