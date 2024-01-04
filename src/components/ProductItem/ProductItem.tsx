import { ProductType } from "../ProductsList/ProductsList";
import { getDiscount } from "../utilities/getDiscount";

interface ProductProps {
  product: ProductType;
  key: ProductType["id"];
}

export const ProductItem = ({ product, key }: ProductProps) => {
  return (
    <li key={key} className="product-item" data-testid="product-list">
      <img src={product.image_src} alt={product.title} height={50} />
      <span data-testid="product-name">{product.title}</span>
      <span data-testid="product-price">£{product.price}</span>
      <span data-testid="subscription-discount">
        {getDiscount(product.subscription_discount)}
      </span>
    </li>
  );
};
