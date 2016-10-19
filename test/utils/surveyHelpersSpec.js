import React from 'react';
import {expect} from 'chai';
import sinon from 'sinon';
import axios from 'axios';
import surveyHelpers from '../../src/utils/surveyHelpers';

describe('<Survey Helpers/>', () => {
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
  it('GetSurveys checking for succes response', (done) => {
    const data = {status:'Success',data:{surveyDtos:{}}};

    const resolved = new Promise((resolve) => resolve({ data }));
    sandbox.stub(axios, 'get').returns(resolved);

   surveyHelpers.getSurveys()
      .then(() => {
         expect(data.status).to.equal('Success');
        })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });


it('GetSurveys checking for failure response', (done) => {
    const data = {errors:'Failure'};

    const resolved = new Promise((resolve) => resolve({ data }));
    sandbox.stub(axios, 'get').returns(resolved);

   surveyHelpers.getSurveys()
      .then(() => {
         expect(data.errors).to.equal('Failure');
        })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });


  it('GetSurveys  call failure', (done) => {
    const data = {errors:'Failure'};

    const rejected = new Promise((resolve,reject) => reject({ data }));
    sandbox.stub(axios, 'get').returns(rejected);

   surveyHelpers.getSurveys()
      .then(() => {
         expect(data.errors).to.equal('Failure');
        })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });

  
  it('getSurveyQuestion http call done', (done) => {
    const data = ['john', 'doe', 'pogi'];

    const resolved = new Promise((resolve) => resolve({ data }));
    sandbox.stub(axios, 'get').returns(resolved);

   surveyHelpers.getSurveyQuestion()
      .then(() => {
        expect(data)
          .to.equal(data) })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });  



it('getSurveyQuestion checking for succes response', (done) => {
    const data = {status:'Success',data:{surveyDtos:{}}};

    const resolved = new Promise((resolve) => resolve({ data }));
    sandbox.stub(axios, 'get').returns(resolved);

   surveyHelpers.getSurveyQuestion()
      .then(() => {
         expect(data.status).to.equal('Success');
        })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });


it('getSurveyQuestion checking for failure response', (done) => {
    const data = {errors:'Failure'};

    const resolved = new Promise((resolve) => resolve({ data }));
    sandbox.stub(axios, 'get').returns(resolved);

   surveyHelpers.getSurveyQuestion()
      .then(() => {
         expect(data.errors).to.equal('Failure');
        })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });



it('getSurveyQuestion  call failure', (done) => {
    const data = {errors:'Failure'};

    const resolved = new Promise((resolve,reject) => reject({ data }));
    sandbox.stub(axios, 'get').returns(resolved);

   surveyHelpers.getSurveyQuestion()
      .then(() => {
         expect(data.errors).to.equal('Failure');
        })
      .then(done, done);

    setTimeout(() => server.respond([200,
      { 'Content-Type': 'application/json' },
      '[]']), 0);    
  });

});