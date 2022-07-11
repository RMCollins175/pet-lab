interface ProductsType {
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

export const ProductsList = ({ products }: ProductsType) => {
  return (
    <ul className="users-list">
      {products.map((product: ProductType) => (
        <li
          key={product.id}
          className="product-item"
          data-testID="product-list"
        >
          <span data-testID="product-name">{product.title}</span>
        </li>
      ))}
    </ul>
  );
};
