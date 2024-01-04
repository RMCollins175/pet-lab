import { ProductItem } from "../ProductItem/ProductItem";
import { ProductsListHeader } from "./ProductsListHeader/ProductsListHeader";

export interface ProductsListProps {
  products: ProductType[];
}
export interface ProductType {
  id: number;
  slug: string;
  title: string;
  vendor: string;
  tags: Array<string>;
  published: true;
  url: string;
  image_src: string;
  option_value: string;
  sku: string;
  price: number;
  subscription_discount: number;
  subscription: true;
}

export const ProductsList = ({ products }: ProductsListProps) => {
  return (
    <div className="min-w-3/4 pt-4">
      <ul className="rounded border border-gray-300 pl-0">
        <ProductsListHeader />
        {products.length > 0
          ? products.map((product: ProductType) => (
              <ProductItem key={product.id} product={product} />
            ))
          : null}
      </ul>
    </div>
  );
};
