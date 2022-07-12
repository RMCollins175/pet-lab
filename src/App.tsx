import "./styles.css";
import React, { useState, useEffect, FormEventHandler } from "react";
import {
  ProductsList,
  ProductType,
} from "./components/ProductsList/ProductsList";
import { Filters } from "./components/Filters/Filters";
import { API_BASE_URL } from "./constants/apiBaseUrl";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [initialProducts, setInitialProducts] = useState<ProductType[]>([]);

  const handleSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let inputs = event.currentTarget;
    let queryString = "";

    if (inputs.tag.value) {
      queryString += `tags_like=${inputs.tag.value}`;
    }

    if (inputs.price.value) {
      queryString += `price_lte=${inputs.price.value}`;
    }

    if (inputs.sub.value) {
      queryString += `subscription=${inputs.subscription.value}`;
    }

    if (queryString.length === 0) {
      setProducts(initialProducts);
      return;
    }

    setIsLoading(true);

    fetch(`${API_BASE_URL}?${queryString}`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetch(API_BASE_URL)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setInitialProducts(data);
      });
  }, []);

  if (error) {
    return <h1>Sorry, please try again later</h1>;
  }

  return (
    <main className="container">
      <Filters handleSearch={handleSearch} loading={isLoading} />
      <ProductsList products={products} />
    </main>
  );
}

export default App;
