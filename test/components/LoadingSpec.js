import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Loading from '../../src/components/Loading';

describe('<Loading />', function () {


//let surveysAlloted = [{srvyId:1,srvyName:'Employee Skills Evaluation'},{srvyId:2,srvyName:'Employee Skills Evaluation2'}];

   it('Render Loading', function () {
      const wrapper = mount(<Loading text={"Loading"} speed={1} />);
      expect(wrapper.text()).to.have.equal("Loading");
   })
});
