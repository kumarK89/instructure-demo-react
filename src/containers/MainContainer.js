import React,{Component,PropTypes} from 'react';
import SurveyContainer from './SurveyContainer';

class MainContainer extends Component{
	constructor(){
		super();
		this.state = {
			focused : 0,
            items: []
		}
	}
	clicked(index){
        this.setState({focused: index});
    }
    render(){
    	return(
    		<div id="wrapper">
    			<div id="sidebar-wrapper">
    				<ul className="sidebar-nav">
    					<li className="sidebar-brand">
                    		<a href="#">kumark@prokarma.com</a>
                		</li>
                		{
							this.props.items.map(function(item,index)
							{
								return <li key={item} onClick={this.clicked.bind(this,index)}><a href="#">{item}</a></li>;
							}.bind(this))						
						}
    				</ul>
    			</div>
    			<div id="page-content-wrapper">
            		<div className="container-fluid">
                		<div className="row">
                    		<div className="col-lg-12">
                    			{
                                    this.props.items[this.state.focused]  === 'Surveys'?<SurveyContainer/>:<p>Selected : {this.props.items[this.state.focused]}</p>
                                }
                                <br/>     
                                <br/>
                                <br/>
                                <br/>
                                <br/>
                    			<button className="btn btn-default" id="menu-toggle">Toggle Menu</button>
                    		</div>
                		</div>
            		</div>
        		</div>
    		</div>
		);
    }
}

MainContainer.propTypes = {
	focused: PropTypes.number,
    items: PropTypes.array.isRequired
}

export default MainContainer;