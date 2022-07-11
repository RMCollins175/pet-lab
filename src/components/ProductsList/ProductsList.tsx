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
      <li className="product-item" data-testID="product-list">
        <div style={{ paddingLeft: "50px" }} />
        <span data-testID="product-name">
          <strong>Title</strong>
        </span>
        <span data-testID="product-price">
          <strong>Price</strong>
        </span>
        <span data-testID="subscription-discount">
          <strong>Discount</strong>
        </span>
      </li>
      {/* TODO make into Header component */}
      {products.map((product: ProductType) => (
        <li
          key={product.id}
          className="product-item"
          data-testID="product-list"
        >
          <img src={product.image_src} alt={product.title} height={50} />
          <span data-testID="product-name">{product.title}</span>
          <span data-testID="product-price">£{product.price}</span>
          <span data-testID="subscription-discount">
            {getDiscount(product.subscription_discount)}
          </span>
        </li>
      ))}
    </ul>
  );
};
