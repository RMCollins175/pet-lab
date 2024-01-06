import React, { useEffect } from "react";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { Filters } from "./components/Filters/Filters";
import { useFetchProducts } from "./components/utilities/hooks/useFetchProducts";

function App() {
  const {
    handleSearch,
    handleReset,
    fetchProducts,
    error,
    isLoading,
    products,
  } = useFetchProducts();

  useEffect(() => {
    fetchProducts();
  }, []);

  if (error) {
    return (
      <h1 className="text-center mt-20 font-semibold text-xl">
        Sorry, please try again later
      </h1>
    );
  }

  return (
    <main className="bg-gray-100">
      <div className="text-center py-10">
        <h1 className="text-4xl font-semibold text-gray-800 mb-3">PetLab</h1>
        <p className="text-md text-gray-600">Your One-Stop Shop for Pet Care</p>
      </div>

      <div className="container mx-auto p-4 md:p-8">
        <div className="flex flex-col md:flex-row gap-4 md:gap-8">
          <div className="mb-4 md:mb-0 bg-white shadow-md p-4 rounded-lg self-start">
            <Filters
              handleSearch={handleSearch}
              loading={isLoading}
              handleReset={handleReset}
            />
          </div>
          {products.length > 0 ? (
            <div className="md:w-3/4 bg-white shadow-md p-4 rounded-lg flex-grow">
              <ProductsList products={products} />
            </div>
          ) : (
            <div>
              <h1 className="text-center mt-20 font-semibold text-xl">
                Sorry, no products match your search
              </h1>
            </div>
          )}
        </div>
      </div>
    </main>
  );
}

export default App;
