//react-test-renderer
import React from 'react';
import {shallow} from 'enzyme';
import Header from '../../components/Header';
import toJSON from 'enzyme-to-json';

test('should render header correctly',()=>{
  // const renderer=new ReactShallowRenderer();
  // renderer.render(<Header/>);
  // expect(renderer.getRenderOutput()).toMatchSnapshot();
  const wrapper=shallow(<Header/>);
  //expect(wrapper.find('h1').text()).toBe('Expensify');
  expect(toJSON(wrapper)).toMatchSnapshot();
})
