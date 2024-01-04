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
      <h1 className="text-center">PetLab</h1>
      <div className="flex flex-col md:flex-row justify-between p-10 md:space-x-4 lg:space-x-8">
        <Filters handleSearch={handleSearch} loading={isLoading} />
        <ProductsList products={products} />
      </div>
    </main>
  );
}

export default App;
