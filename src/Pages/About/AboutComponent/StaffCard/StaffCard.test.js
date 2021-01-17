import React from 'react';
import { shallow } from 'enzyme';
import StaffCard from './StaffCard';

describe('StaffCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<StaffCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
