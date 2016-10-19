import axios from 'axios';
import logCustomMessage from './logCustomMessage';

var helpers = {
	getSurveys : function(usrId){
		return axios.get('/user/getSurveyDetails?usrId='+usrId)
		.then(function(response){
			if(response.data.status === 'SUCCESS'){
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
		return axios.get('/user/getUserSurveyQustions?usrId='+usrId+'&srvyId='+srvyId)
			.then(function(response){
				if(response.data.status === 'SUCCESS'){
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