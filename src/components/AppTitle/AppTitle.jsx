// @flow

import React, {Component} from 'react';

import './AppTitle.css'; 

class AppTitle extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h2 className='AppTitle'>{this.props.text}</h2>
		)
	}
}

export default AppTitle;
