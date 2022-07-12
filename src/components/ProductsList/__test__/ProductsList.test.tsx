import { mount } from "enzyme";
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript";
import { ProductsList } from "../ProductsList";

const dummyProducts = [
  {
    id: 1,
    slug: "joint-chews-for-dogs",
    title: "Joint Care Chews",
    vendor: "PetLab",
    tags: ["Chews", "Dog"],
    published: true,
    url: "https://thepetlabco.com/products/joint-chews-for-dogs",
    image_src: "https://via.placeholder.com/300x300.png?text=Joint+Care+Chews",
    option_value: "Single Pack",
    sku: "JCSC1",
    price: 42.29,
    subscription_discount: 25,
    subscription: true,
  },
  {
    id: 2,
    slug: "skin-chews",
    title: "Dental Chews (Rawhide)",
    vendor: "PetLab",
    tags: ["Chews", "Dog"],
    published: true,
    url: "https://thepetlabco.com/products/skin-coat",
    image_src: "https://via.placeholder.com/300x300.png?text=Dental+Chews",
    option_value: "Single Pack",
    sku: "DHC1",
    price: 29.95,
    subscription_discount: 25,
    subscription: true,
  },
];

const ProductsListProps = {
  products: [],
};

const elem = <ProductsList {...(ProductsListProps as any)} />;
const wrapper = mount(elem);

describe("ProductsList component tests", () => {
  it("should render a default productList component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render some product list items based on the products data", () => {
    expect(wrapper.find('[data-testid="product-list"]').exists()).toBe(false);
    wrapper.setProps({
      products: dummyProducts,
    });
    expect(wrapper.find('[data-testid="product-list"]').exists()).toBe(true);
  });

  it("should render the correct number of products", () => {
    wrapper.setProps({
      products: dummyProducts,
    });
    expect(wrapper.find('[data-testid="product-list"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="product-list"]').length).toEqual(2);
  });

  it("should render the correct product name, price and discount values", () => {
    wrapper.setProps({
      products: dummyProducts,
    });

    expect(wrapper.find('[data-testid="product-name"]').at(0).text()).toEqual(
      "Joint Care Chews"
    );
    expect(wrapper.find('[data-testid="product-name"]').at(1).text()).toEqual(
      "Dental Chews (Rawhide)"
    );
    expect(wrapper.find('[data-testid="product-price"]').at(0).text()).toEqual(
      "£42.29"
    );
    expect(wrapper.find('[data-testid="product-price"]').at(1).text()).toEqual(
      "£29.95"
    );
    expect(
      wrapper.find('[data-testid="subscription-discount"]').at(0).text()
    ).toEqual("25%");
    expect(
      wrapper.find('[data-testid="subscription-discount"]').at(1).text()
    ).toEqual("25%");
  });
});
