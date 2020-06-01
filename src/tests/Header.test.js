import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Header from "../components/Header";

describe("Header nav test suite", () => {
  Enzyme.configure({ adapter: new Adapter() });

  it("There are four links within the navbar representing each sport", async () => {
    const links = shallow(<Header />).find("li");
    //All of the sport links currently available
    const sports = ["Basketball", "Volleyball", "Tennis", "Soccer", "MMA"];
    expect(links.length).toEqual(sports.length);
    for (let i = 0; i < links.length; ++i) {
      expect(links.at(i).text()).toEqual(sports[i]);
    }
  });
});
