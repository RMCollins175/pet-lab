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
    console.log("🚀 ~ file: App.tsx ~ line 17 ~ App ~ event", event);
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
      queryString += `subscription=${inputs.sub.value}`;
    }

    if (queryString.length === 0) {
      console.log("test");
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
          <button type="submit" className="search-button" disabled={isLoading}>
            Search
          </button>
        </form>
        <button
          className="search-button"
          disabled={isLoading}
          onClick={() => console.log("reset")}
        >
          Reset
        </button>
      </div>
      <div className="product-container">
        <ProductsList products={products} />
      </div>
    </main>
  );
}

export default App;
