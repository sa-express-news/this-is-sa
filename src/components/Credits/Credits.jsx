// @flow

import React, {Component} from 'react';

import './Credits.css'; 

class Credits extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h5 className='Credits'>{this.props.text}</h5>
		)
	}
}

export default Credits;
