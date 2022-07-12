import { mount } from "enzyme";
import { Filters } from "../Filters";

const filtersProps = {
  loading: false,
  handleSearch: jest.fn(),
};

const elem = <Filters {...filtersProps} />;
const wrapper = mount(elem);

describe("Filters component tests", () => {
  it("should render a default productList component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should render empty tag and price input fields", () => {
    expect(wrapper.find('[data-testid="tag-label"]').exists()).toBe(true);
    expect(wrapper.find('[data-testid="price-label"]').exists()).toBe(true);
  });

  it("should fire onSubmit event when the search button is clicked", () => {
    wrapper.find('[data-testid="search-button"]').simulate("click", {
      target: {
        value: "dog",
      },
    });
    expect(filtersProps.handleSearch).toHaveBeenCalled();
    expect(wrapper.find("input").props().value).toBe("dog");
  });
});
