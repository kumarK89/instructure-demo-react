import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import SurveyForm from '../../../src/components/survey/SurveyForm';


describe('<SurveyForm />', function () {
	// let a1= ['a','b','c'];
	// let a2= ['a','b','c'];
	// let surveyQuestionss =  [a1,a2];
	//let surveyNames = 'a';
//	var propss = ;
  
  it('should have two buttons one is submit and other is reset', function () {
  	var array = [  
   {  
      "srvyQtnId":1,
      "qtnTxt":"Java Programmatic Skills",
      "surveyQuestionOptionsDtos":[  
         {  
            "srvyQtnOptId":1,
            "optText":"POOR",
            "optionSelected":false
         },
         {  
            "srvyQtnOptId":2,
            "optText":"AVERAGE",
            "optionSelected":false
         },
         {  
            "srvyQtnOptId":3,
            "optText":"GOOD",
            "optionSelected":false
         },
         {  
            "srvyQtnOptId":4,
            "optText":"EXCCELLENT",
            "optionSelected":false
         }
      ]
   }
];
  	var name ="instructure";
    const wrapper = mount(<SurveyForm surveyName={name} surveyQuestions={array} />); 

    expect(wrapper.props().surveyName).to.be.defined;
    expect(wrapper.props().surveyName).to.equal('instructure');
  })
});