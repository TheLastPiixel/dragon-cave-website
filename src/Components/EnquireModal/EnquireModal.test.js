import React from 'react';
import { shallow } from 'enzyme';
import EnquireModal from './EnquireModal';

describe('EnquireModal', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<EnquireModal />);
    expect(wrapper).toMatchSnapshot();
  });
});
