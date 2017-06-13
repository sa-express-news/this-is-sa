// @flow

import React, {Component} from 'react';

import './SubStoryHeadline.css'; 

class SubStoryHeadline extends Component {
	props: {
		text: string
	};

	render(){
		return(
			<h4 className='SubStoryHeadline'>{this.props.text}</h4>
		)
	}
}

export default SubStoryHeadline;
