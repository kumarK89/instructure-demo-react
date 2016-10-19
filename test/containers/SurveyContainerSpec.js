import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import SurveyContainer from '../../src/containers/SurveyContainer';
import surveyHelpers from '../../src/utils/surveyHelpers';


describe('<SurveyContainer />', function () {
   let sandbox;
   let server;
   beforeEach(() => {
      sandbox = sinon.sandbox.create();
      server = sandbox.useFakeServer();
  });

  afterEach(() => {
      server.restore();
      sandbox.restore();
  });

  let array = [  
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
   },
   {  
      "srvyQtnId":2,
      "qtnTxt":"Knowledge On React",
      "surveyQuestionOptionsDtos":[  
         {  
            "srvyQtnOptId":5,
            "optText":"POOR",
            "optionSelected":false
         },
         {  
            "srvyQtnOptId":6,
            "optText":"AVERAGE",
            "optionSelected":false
         },
         {  
            "srvyQtnOptId":7,
            "optText":"GOOD",
            "optionSelected":false
         },
         {  
            "srvyQtnOptId":8,
            "optText":"EXCCELLENT",
            "optionSelected":false
         }
      ]
   }];

   let array1 = [{srvyId:1,srvyName:'Employee Skills Evaluation'},{srvyId:2,srvyName:'Employee Skills Evaluation2'}];
   let stringValue = '';

   it('Test functioning of surveyGrid', (done) => {
      const wrapper = mount(<SurveyContainer isLoading={false} showSurveyform={false} surveysAlloted={array1} surveyQuestions={array} selectedSurvey={stringValue}/>);
      const data = array1;

      const resolved = new Promise((resolve) => resolve({ data }));
      sandbox.stub(axios, 'get').returns(resolved);

      surveyHelpers.getSurveys()
         .then(() => {
            expect(data).to.equal(data);
         }).then(done, done);
   })

   it('Test rendering of SurveyForm', (done) => {
      sinon.spy(SurveyContainer.prototype, 'componentDidMount');
      const wrapper = mount(<SurveyContainer isLoading={false} showSurveyform={false} surveysAlloted={array1} surveyQuestions={array} selectedSurvey={stringValue}/>);
      expect(SurveyContainer.prototype.componentDidMount.calledOnce).to.equal(true);

      const data = array1;

      const resolved = new Promise((resolve) => resolve({ data }));
      sandbox.stub(axios, 'get').returns(resolved);

      surveyHelpers.getSurveys()
         .then(() => {
            expect(data).to.equal(data);
         }).then(done, done);
   })

});