import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import ProductHeader from './components/ProductHeader'

describe('App', () => {
  it("renders without crashing", () => {
    shallow(<App />);
  });

  it("renders Produc Header", () => {
    const wrapper = shallow(<App />);
      expect(wrapper.find(ProductHeader)).toHaveLength(1);
  });
  
  it("renders welcome message", () => {
    const wrapper = shallow(<App />);
    const welcome = <h2>Welcome to React</h2>;
    // expect(wrapper.contains(welcome)).toBe(true);
    expect(wrapper.contains(welcome)).toEqual(true);
  });
});