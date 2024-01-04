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
    <main className="bg-gradient-to-r from-blue-400 to-indigo-400">
      <div className="flex flex-col items-center justify-center py-20">
        <h1 className="text-6xl font-bold text-indigo-900 mb-4">PetLab</h1>
        <p className="text-xl text-indigo-800 mb-4">
          Your One-Stop Shop for Pet Care
        </p>
      </div>

      <div className="container mx-auto p-6 md:p-10">
        <div className="flex flex-col md:flex-row md:space-x-4 lg:space-x-8">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <Filters handleSearch={handleSearch} loading={isLoading} />
          </div>
          <div className="md:w-3/4">
            <ProductsList products={products} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
