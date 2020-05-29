import React from "react";
import { shallow } from "enzyme";
import Enzyme from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Volleyball from "../components/Volleyball/Volleyball";
import Basketball from "../components/Basketball/Basketball";
import Tennis from "../components/Tennis/Tennis";
import Soccer from "../components/Soccer/Soccer";

describe("Sport page test suite", () => {
  Enzyme.configure({ adapter: new Adapter() });

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
    shallow(<Tennis />)
  ];

  it("Verify the state for day of the week based on the current day is automatically set", () => {
    for (let i = 0; i < sportWrappers.length; ++i) {
      expect(sportWrappers[i].exists()).toBe(true);
      expect(sportWrappers[i].state().dayOfWeek).toEqual(expectedDay);
    }
  });

  it("Verify handleClick function validates inputs", () => {
    const invalidInputs = [
      "Mnday", "Tuesdays", "Wendsday", "Thursdaay", "Fryday", "Satrday", "Sonday", null,
    ]

    for(let i = 0; i < sportWrappers.length; ++i) {
      for(let j = 0; j < invalidInputs.length; ++j) {
        sportWrappers[i].instance().handleClick(invalidInputs[i]);
        //Verify that the day of the week did not change
        expect(sportWrappers[i].state().dayOfWeek).toEqual(expectedDay);
      }
    }
  });
  
  it("Verify handleClick function correctly sets state", () => {
    const validInputs = [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday",
    ]

    for(let i = 0; i < sportWrappers.length; ++i) {
      for(let j = 0; j < validInputs.length; ++j) {
        sportWrappers[i].instance().handleClick(validInputs[i]);
        //Verify that the day of the week did not change
        expect(sportWrappers[i].state().dayOfWeek).toEqual(validInputs[i]);
      }
    }
  });
});
