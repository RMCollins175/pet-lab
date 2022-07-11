import "./styles.css";
import React, { useState, useEffect } from "react";
import {
  ProductsList,
  ProductType,
} from "./components/ProductsList/ProductsList";
import { ProductsSearchInput } from "./components/ProductsSearchInput/ProductsSearchInput";

const API_BASE_URL = "http://localhost:3000/products";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);
  // const [searchResults, setSearchResults] = useState<ProductType | null>(null);
  const [productId, setProductId] = useState("");
  console.log("🚀 ~ file: App.tsx ~ line 16 ~ App ~ productId", productId);

  const filterProducts = (product: ProductType) => {
    const filteredProducts = products.filter((p: ProductType) => {
      return p.title.toLowerCase().includes(product.title.toLowerCase());
    });

    setProducts(filteredProducts);
  };

  const productSearchHandler = (id: string) => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}/${id}`)
      .then((r) => r.json())
      .then((data) => {
        filterProducts(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    if (productId) {
      productSearchHandler(productId);
    } else {
      fetch(API_BASE_URL)
        .then((r) => r.json())
        .then((data) => {
          setProducts(data);
        });
    }
  }, [productId]);

  return (
    <main className="container">
      <div className="users-search-container">
        <ProductsSearchInput
          isLoading={isLoading}
          setProductId={setProductId}
          productId={productId}
        />
      </div>

      <ProductsList products={products} />
    </main>
  );
}

export default App;
