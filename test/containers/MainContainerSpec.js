import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import MainContainer from '../../src/containers/MainContainer';


describe('<MainContainer />', function () {

   it('Check if menu items are rendering or not', function () {
      const wrapper = mount(<MainContainer items={ ['Module_1', 'Module_2'] } />).find('li'); 
      expect(wrapper.at(1).key()).to.equal('Module_1');
      expect(wrapper.at(2).key()).to.equal('Module_2');
   })

   it('Check appropraite module is rendering or not', function () {
      const wrapper = mount(<MainContainer items={ ['Module_1', 'Module_2'] } />); 
      wrapper.find('li').at(1).simulate('click');
      expect(wrapper.find('p')).to.length(1);
   })

   it('Test when there are no modules', function () {
         const wrapper = mount(〈MainContainer items={ [] } /〉);
         expect(wrapper.find('li')).to.length(1);
   })
});