import "./App.css";
import React, { useState, useEffect } from "react";
import { ProductsList } from "./ProductsList/ProductsList";

const API_BASE_URL = "http://localhost:3000/products";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ products", products);
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ products", products.length);

  const searchProductshandler = () => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    searchProductshandler();
  }, []);

  return (
    <main className="container">
      <div>
        <ProductsList products={products} />
      </div>
    </main>
  );
}

export default App;
