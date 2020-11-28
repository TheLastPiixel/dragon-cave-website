import React from 'react';
import { shallow } from 'enzyme';
import MidSection from './MidSection';

describe('MidSection', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<MidSection />);
    expect(wrapper).toMatchSnapshot();
  });
});
