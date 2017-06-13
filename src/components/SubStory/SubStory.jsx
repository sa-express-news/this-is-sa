// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import FullPhoto from '../FullPhoto/FullPhoto';
import SubStoryHeadline from '../SubStoryHeadline/SubStoryHeadline';

import './SubStory.css';

class SubStory extends Component {

	props:{
		link: string,
		img: string,
		title: string,
		description: string
	};
	
	render(){
		return(
			<div className='SubStory'>
				<a href={this.props.link}>
					<FullPhoto src={this.props.img} alt={this.props.title}/>
					<SubStoryHeadline text={this.props.title} />
				</a>
			</div>
		)
	}
}



export default SubStory;