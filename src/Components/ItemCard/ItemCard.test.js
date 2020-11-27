import React from 'react';
import { shallow } from 'enzyme';
import ItemCard from './ItemCard';

describe('ItemCard', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ItemCard />);
    expect(wrapper).toMatchSnapshot();
  });
});
