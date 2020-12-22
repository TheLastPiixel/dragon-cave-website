import React from 'react';
import { shallow } from 'enzyme';
import NewArrivals from './NewArrivals';

describe('NewArrivals', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<NewArrivals />);
    expect(wrapper).toMatchSnapshot();
  });
});
