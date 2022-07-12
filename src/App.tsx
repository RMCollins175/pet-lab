import "./styles.css";
import React, { useState, useEffect } from "react";
import {
  ProductsList,
  ProductType,
} from "./components/ProductsList/ProductsList";
import { ProductsSearchInput } from "./components/ProductsSearchInput/ProductsSearchInput";
import { Filters } from "./components/Filters/Filters";
import { API_BASE_URL } from "./constants/apiBaseUrl";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState<any>([]);
  const [productId, setProductId] = useState("");
  console.log("🚀 ~ file: App.tsx ~ line 16 ~ App ~ productId", productId);

  const handleSearch = (event: any) => {};

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  return (
    <main className="container">
      <div className="filters-container">
        <form onSubmit={handleSearch} className="filters">
          <label className="filter">
            Tag: <input type="text" name="tag" />
          </label>
          <label className="filter">
            Price: <input type="number" name="price" min="1" />
          </label>
          <label className="filter">
            Subscription:
            <select name="sub">
              <option></option>
              <option value="true">Yes</option>
              <option value="false">No</option>
            </select>
          </label>
        </form>
      </div>
      <div className="product-container">
        <ProductsSearchInput
          isLoading={isLoading}
          setProductId={setProductId}
          productId={productId}
        />
        <ProductsList products={products} />
      </div>
    </main>
  );
}

export default App;
