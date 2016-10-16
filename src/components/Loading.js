import React,{PropTypes,Component} from 'react';
var styles = {
    container:{
        position : 'fixed',
        left:0,
        right:0,
        top:0,
        bottom:0,
        fontSize: '55px'
    },
    content:{
        textAlign : 'center',
        position : 'absolute',
        width: '100%',
        marginTop : '30px'
    }
}

class Loading extends Component{
	constructor(){
		super();
		this.state = {
		  text : 'Loading'
		}
	}
	componentDidMount(){
		
	}
	componentWillUnmount(){
		
	}
	render(){
		return(
			<div style={styles.container}>
                <p style={styles.content}>{this.state.text}</p>
            </div>
		);
	}
}
Loading.propTypes = {
	text : PropTypes.string,
	speed: PropTypes.number
};
Loading.defaultProps = {
  text : 'Loading',
  speed : 300
};

export default Loading;