import React from "react";
import { render } from "@testing-library/react";
import App from "../App";
import Header from "../components/Header";
import { shallow, mount } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";

describe("App test suite", () => {
    
  Enzyme.configure({ adapter: new Adapter() });

  //Title test
  it("Sport Spots is displayed in the nav and the home page component", async () => {
    const { findAllByText } = render(<App />);
    const linkElement = await findAllByText("Sport Spots");
    //Check to make sure that there are two instances of the title
    expect(linkElement.length).toBe(2);
    for (let i = 0; i < linkElement.length; ++i) {
      //Check to make sure that each of the individual elements are in the doc
      expect(linkElement[i]).toBeInTheDocument();
    }
  });

  //Component tests to ensure all are still being rendered
  it("Renders the header component at the top of the page", async () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });
});
