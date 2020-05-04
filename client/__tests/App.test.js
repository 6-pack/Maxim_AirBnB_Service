import React from 'react';
import App from '../../client/components/App.jsx';
import {shallow, mount} from 'enzyme';

describe('App', () => {
  it('it should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
});

describe('B suite', () => {
  it('should show text',  () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('.test');
    expect(text.text()).toBe('Hello from React!');
  })
  it('Should exist', () => {
    const wrapper = shallow(<App />);
    test = wrapper.find('.test');
    expect(wrapper.exists('.test')).toBe(true);
    expect(test.exists()).toBe(true);
  })
});