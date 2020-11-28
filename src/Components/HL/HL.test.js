import React from 'react';
import { shallow } from 'enzyme';
import HL from './HL';

describe('HL', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<HL />);
    expect(wrapper).toMatchSnapshot();
  });
});
