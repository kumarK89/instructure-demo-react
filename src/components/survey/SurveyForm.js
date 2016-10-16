import React,{PropTypes} from 'react';

const SurveyForm = (props) => (
	<form>
		<h1>{props.surveyName}</h1>
		<ol>
			{
				props.surveyQuestions.map(function(item)
				{
					return (
						<li key={item.qtnTxt}>
							<h4>{item.qtnTxt}</h4>
							{item.surveyQuestionOptionsDtos.map(function(qtn,i){
								return (
									<div key={i}>
										<input type='radio' key={qtn.optText} 
										value={qtn.optText} name={item.qtnTxt}/>
										&nbsp;
										&nbsp;
										&nbsp;
										{qtn.optText}
										<br/>
									</div>
								)
							})}
							
						</li>
					)
				})						
			}
		</ol>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button type="submit" className='btn btn-success'>Submit Survey</button>
		&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
		<button type="reset" className='btn'>Cancel Survey</button>
	</form>
);

SurveyForm.propTypes = {
	surveyQuestions: PropTypes.array.isRequired,
	surveyName : PropTypes.string.isRequired
}

export default SurveyForm;