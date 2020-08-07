import React from "react";
import { shallow } from "enzyme";
import ProductHeader from '../ProductHeader'

describe("App", () => {
  it("renders without crashing", () => {
    shallow(<ProductHeader />);
  });

  it("renders h2", () => {
    const wrapper = shallow(<ProductHeader />);
    expect(wrapper.find("h2")).toHaveLength(1);
  });
});
