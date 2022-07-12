import { ProductsListHeader } from "./ProductsListHeader/ProductsListHeader";

interface ProductsListProps {
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
  const getDiscount = (discount: any) => {
    return typeof discount === "number" ? `${discount}%` : "";
  };

  return (
    <ul className="products-list">
      <ProductsListHeader />
      {products.map((product: ProductType) => (
        <li
          key={product.slug}
          className="product-item"
          data-testid="product-list"
        >
          <img src={product.image_src} alt={product.title} height={50} />
          <span data-testid="product-name">{product.title}</span>
          <span data-testid="product-price">£{product.price}</span>
          <span data-testid="subscription-discount">
            {getDiscount(product.subscription_discount)}
          </span>
        </li>
      ))}
    </ul>
  );
};
