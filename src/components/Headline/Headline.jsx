// @flow

import React, {Component} from 'react';

import './Headline.css'; 

class Headline extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h4 className='Headline'>{this.props.text}</h4>
		)
	}
}

export default Headline;
