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

  // useEffect(() => {
  //     fetch(API_BASE_URL)
  //       .then((r) => r.json())
  //       .then((data) => {
  //         setProducts(data);
  //       });
  // }, []);

  return (
    <main className="container">
      <div className="filters-container">
        <Filters />
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
