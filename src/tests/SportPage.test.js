import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Volleyball from "../components/Volleyball/Volleyball";
import Basketball from "../components/Basketball/Basketball";
import Tennis from "../components/Tennis/Tennis";

describe("Sport page test suite", () => {
  Enzyme.configure({ adapter: new Adapter() });

  it("Test the state for day of the week based on the current day", () => {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    const expectedDay = weekday[d.getDay()];

    const sportWrappers = [
      shallow(<Volleyball />),
      shallow(<Basketball />),
      shallow(<Tennis />),
    ];

    for (let i = 0; i < sportWrappers.length; ++i) {
      expect(sportWrappers[i].exists()).toBe(true);
      expect(sportWrappers[i].state().dayOfWeek).toEqual(expectedDay);
    }
  });
});
