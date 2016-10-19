import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import SurveyGrid from '../../../src/components/survey/SurveyGrid';

describe('<SurveyGrid />', function () {

let tableHeaders = ['Survey Id', 'Title'];
let getSurveyQuestions = function(){
//do nothing;
}
let surveysAlloted = [{srvyId:1,srvyName:'Employee Skills Evaluation'},{srvyId:2,srvyName:'Employee Skills Evaluation2'}];

   it('Check for \'Take Survey button\'', function () {
      const wrapper2 = mount(<SurveyGrid surveyTableHeaders={tableHeaders} getSurveyQuestions={getSurveyQuestions} surveysAlloted={surveysAlloted} />);
      expect(wrapper2.find('button')).to.have.length(2);
   })
});
