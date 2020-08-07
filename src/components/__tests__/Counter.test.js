import React from "react";
import { shallow, mount } from "enzyme";
import Counter from "../Counter";

describe("Counter", () => {
    it("renders without crashing", () => {
      shallow(<Counter />);
    });

    it("the increment method increments count", () => {
        const wrapper = mount(<Counter />);

        expect(wrapper.instance().state.count).toBe(0);

        // wrapper.find('button.counter-button').simulate('click')
        // wrapper.setState({count: 1})
        wrapper.instance().increment();
        
        expect(wrapper.instance().state.count).toBe(1);
    });
});
