import axios from 'axios';
import logCustomMessage from './logCustomMessage';

var _BASE_URL = 'http://localhost:8090/';

var helpers = {
	getSurveys : function(usrId){
		return axios.get(_BASE_URL+'user/getSurveyDetails?usrId='+usrId)
		.then(function(response){
			return response.data.surveyDtos;
		})
		.catch(function(error){
			return logCustomMessage(error , {
               userId : usrId,
               error :error
            });
		});
	},
	getSurveyQuestion : function(usrId,srvyId){
		return axios.get(_BASE_URL+
			'user/getUserSurveyQustions?usrId='+usrId+'&srvyId='+srvyId)
			.then(function(response){
				return response.data;
			})
			.catch(function(error){
				return logCustomMessage(error , {
               		userId : usrId,
               		error :error
            	});
			});
	}
}

export default helpers;