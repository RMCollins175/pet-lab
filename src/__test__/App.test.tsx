import { mount } from "enzyme";
import App from "../App";

const elem = <App />;
const wrapper = mount(elem);

describe("App", () => {
  it("should render an App component", () => {
    expect(wrapper).toMatchSnapshot();
  });

  it("should fetch products from the API when the component is mounted", () => {});
});
