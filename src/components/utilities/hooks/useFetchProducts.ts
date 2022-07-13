import { useState, FormEventHandler } from "react";
import { API_BASE_URL } from "../../../constants/apiBaseUrl";
import { ProductType } from "../../ProductsList/ProductsList";

export const useFetchProducts = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);
  const [initialProducts, setInitialProducts] = useState<ProductType[]>([]);

  const handleSearch: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    let inputs = event.currentTarget;

    const queryString = new URLSearchParams();

    if (inputs.tag.value) {
      queryString.append("tags_like", inputs.tag.value);
    }

    if (inputs.price.value) {
      queryString.append("price_lte", inputs.price.value);
    }

    if (inputs.subscription.value) {
      queryString.append("subscription", inputs.subscription.value);
    }

    if (queryString.toString().length === 0) {
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

  const fetchProducts = () => {
    setIsLoading(true);

    fetch(`${API_BASE_URL}`)
      .then((r) => r.json())
      .then((data) => {
        setProducts(data);
        setInitialProducts(data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return {
    fetchProducts,
    isLoading,
    error,
    products,
    handleSearch,
  };
};
