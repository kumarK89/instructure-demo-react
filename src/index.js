import React from 'react';
import ReactDOM from 'react-dom';
import Raven from 'raven-js';
import MainContainer from './containers/MainContainer';
import './index.css';

var sentryKey = '940d2962f66a41a6986d12b20cdec383';
var sentryApp = '103466';
var sentryUrl = 'https://'+ sentryKey + '@app.getsentry.com/' + sentryApp;

var _APP_INFO = {
    name:'Demo',
    branch:'Master',
    version:'1.0'
}

window.onerror = function(){
  Raven.showReportDialog();
}

Raven.config(sentryUrl,{
    release : _APP_INFO.version,
    tags : {
        branch: _APP_INFO.branch,
        github_commit: 'sdfasdfsdf'
    }
}).install();

ReactDOM.render(
  <MainContainer items={ ['Dashboard', 'Training','Surveys', 'People', 'Tools', 'Account Settings'] } />,
  document.getElementById('root')
);
