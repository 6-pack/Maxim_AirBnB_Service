import React from 'react';
import App from '../../client/components/App.jsx';
import {shallow} from 'enzyme';

describe('App', () => {
  it('it should be true', () => {
    const foo = true;
    expect(foo).toBe(true);
  })
});

describe('B suite', () => {
  it('should show text',  () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find('#test');
    expect(text.text()).toBe('Hello from React!')
  })
})

const wrapper = shallow(<App/>);
test('Should exist', () => {
  expect(wrapper.find('#test')).toExist();
});