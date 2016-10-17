import axios from 'axios';
import logCustomMessage from './logCustomMessage';

var _BASE_URL = 'http://localhost:8090/';

var helpers = {
	getSurveys : function(usrId){
		return axios.get(_BASE_URL+'user/getSurveyDetails?usrId='+usrId)
		.then(function(response){
			if(response.data.status === 'Success'){
				return response.data.data.surveyDtos;
			}else{
				return logCustomMessage(response.data.errors , {
               		userId : usrId,
               		error :response.data.errors
            	});
			}
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
				if(response.data.status === 'Success'){
					return response.data.data;
				}else{
					return logCustomMessage(response.data.errors , {
               			userId : usrId,
               			error :response.data.errors
            		});
				}
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