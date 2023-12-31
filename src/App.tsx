import "./styles.css";
import React, { useEffect } from "react";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { Filters } from "./components/Filters/Filters";
import { useFetchProducts } from "./components/utilities/hooks/useFetchProducts";

function App() {
  const { fetchProducts, error, handleSearch, isLoading, products } =
    useFetchProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return <h1>Sorry, please try again later</h1>;
  }

  return (
    <main>
      <h1 className="title">PetLab Tech Test</h1>
      <div className="container">
        <Filters handleSearch={handleSearch} loading={isLoading} />
        <ProductsList products={products} />
      </div>
    </main>
  );
}

export default App;
