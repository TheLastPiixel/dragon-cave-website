import React from 'react';
import { shallow } from 'enzyme';
import PictureSlides from './PictureSlides';

describe('PictureSlides', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<PictureSlides />);
    expect(wrapper).toMatchSnapshot();
  });
});
