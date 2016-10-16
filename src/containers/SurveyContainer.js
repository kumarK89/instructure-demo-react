import React,{Component,PropTypes} from  'react';
import surveyHelpers from '../utils/surveyHelpers';
import SurveyGrid from '../components/survey/SurveyGrid';
import SurveyForm from '../components/survey/SurveyForm';
import Loading from '../components/Loading';

class SurveyContainer extends Component
{
	constructor(){
		super();
		this.state = {
			isLoading : true,
			showSurveyform : false,
			surveysAlloted : [],
			surveyQuestions : [],
			selectedSurvey : ''
		}
		this.getSurveyQuestions = this.getSurveyQuestions.bind(this);
	}
	getSurveyQuestions(usrId,srvyId,srvyName){
		this.setState({
			showSurveyform:false,
			selectedSurvey:srvyName
		});
		surveyHelpers.getSurveyQuestion(usrId,srvyId)
			.then(function(surveyQuestions){
				this.setState({
					showSurveyform:true,
					surveyQuestions:surveyQuestions
				});
			}.bind(this));
	}
	componentDidMount(){
		surveyHelpers.getSurveys(1).then(function(surveys){
			this.setState({
				isLoading : false,
				surveysAlloted : surveys
			});
			this.forceUpdate();
		}.bind(this));						
	}	
	render(){
		var tableHeaders = ['Survey Id', 'Title', 'Start Date', 'End Date','Action'];
		return(
			<div>
				{this.state.isLoading === true
					? <Loading speed={800} text='Waiting'/>
					: <div>
						<SurveyGrid 
							surveyTableHeaders={tableHeaders}
							getSurveyQuestions={this.getSurveyQuestions}
							surveysAlloted={this.state.surveysAlloted}/>						
					  </div>
				}
				{this.state.showSurveyform === true 
					&& <SurveyForm surveyName={this.state.selectedSurvey}
							surveyQuestions={this.state.surveyQuestions}/> 
				}
			</div>
		);
	}
}
SurveyContainer.PropTypes = {
	isLoading: PropTypes.bool.isRequired,
	showSurveyform:PropTypes.bool.isRequired,
	surveysAlloted: PropTypes.array.isRequired,
	surveyQuestions: PropTypes.array.isRequired,
	selectedSurvey:PropTypes.string.isRequired
}
export default SurveyContainer;
