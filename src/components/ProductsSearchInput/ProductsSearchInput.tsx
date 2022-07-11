import { useEffect, useState } from "react";

interface UsersSearchInputProps {
  //   onSearch: (arg0: string) => void;
  isLoading: boolean;
  setProductId: (arg0: string) => void;
  productId: string;
}

export const ProductsSearchInput = ({
  isLoading,
  setProductId,
  productId,
}: UsersSearchInputProps) => {
  return (
    <div className="product-search-input-wrapper">
      <input
        aria-label="Search product"
        className="product-search-input"
        onChange={(e) => setProductId(e.target.value)}
        placeholder="Search products..."
        type="text"
        value={productId}
        data-testID="search-input"
      />
      {/* {isLoading && (
        <div className="loader-wrapper" data-testID="loading">
          <LoaderIcon />
        </div>
      )} */}
    </div>
  );
};
