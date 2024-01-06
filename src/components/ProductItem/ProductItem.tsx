import { ProductType } from "../ProductsList/ProductsList";
import { getDiscount } from "../utilities/getDiscount";

interface ProductProps {
  product: ProductType;
}

export const ProductItem = ({ product }: ProductProps) => {
  return (
    <li
      className="grid justify-center grid-cols-[0.2fr_1.5fr_0.5fr_0.5fr] p-4 border-b border-gray-300 cursor-pointer "
      data-testid="product-list">
      <img src={product.image_src} alt={product.title} height={50} />
      <span
        className="flex items-center justify-center"
        data-testid="product-name">
        {product.title}
      </span>
      <span
        className="flex items-center justify-center"
        data-testid="product-price">
        £{product.price}
      </span>
      <span
        className="flex items-center justify-center"
        data-testid="subscription-discount">
        {getDiscount(product.subscription_discount)}
      </span>
    </li>
  );
};
