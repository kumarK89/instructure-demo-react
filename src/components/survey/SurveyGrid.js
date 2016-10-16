import React,{PropTypes} from 'react'
const SurveyGrid = (props) => (
    <table className="table table-striped table-bordered table-hover table-condensed">
        <thead>
            <tr>
                {
                    props.surveyTableHeaders.map(function(row, i) {
                        return  <th key={i}> {row} </th>
                    })
                } 
           </tr>
        </thead>
        <tbody>       
            {
                props.surveysAlloted.map(function(row, i) {
                    var boundClick = props.getSurveyQuestions
                                            .bind(props,1,row.srvyId,row.srvyName);
                    return  (
                        <tr key={i}> 
                            <td> {row.srvyId} </td> 
                            <td> {row.srvyName} </td> 
                            <td> {row.srvyStrtDt} </td> 
                            <td> {row.srvyEndDt} </td> 
                            <td> 
                                <button className="btn btn-default" 
                                    onClick={boundClick}>
                                    Take Survey
                                </button>
                            </td>
                        </tr>

                    )
                },props)
            }        
        </tbody>
    </table>
);

SurveyGrid.propTypes = {
	surveyTableHeaders : PropTypes.array.isRequired,
    getSurveyQuestions: PropTypes.func.isRequired,
    surveysAlloted: PropTypes.array.isRequired
}

export default SurveyGrid;
