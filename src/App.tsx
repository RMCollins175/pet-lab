import "./App.css";
import React, { useState, useEffect } from "react";

const API_BASE_URL = "http://localhost:3000/products/";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  console.log("🚀 ~ file: App.js ~ line 10 ~ App ~ products", products);

  const searchProducts = (id: number) => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}${id}`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setIsLoading(false);
      });
  };

  React.useEffect(() => {
    searchProducts(1);
  }, []);

  return <div className="App"></div>;
}

export default App;
