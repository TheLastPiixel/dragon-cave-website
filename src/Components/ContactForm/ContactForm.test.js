import React from 'react';
import { shallow } from 'enzyme';
import ContactForm from './ContactForm';

describe('ContactForm', () => {
  test('matches snapshot', () => {
    const wrapper = shallow(<ContactForm />);
    expect(wrapper).toMatchSnapshot();
  });
});
