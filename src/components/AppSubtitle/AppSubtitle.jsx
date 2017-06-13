// @flow

import React, {Component} from 'react';

import './AppSubtitle.css'; 

class AppSubtitle extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h3 className='AppSubtitle'>{this.props.text}</h3>
		)
	}
}

export default AppSubtitle;
