// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import SubStoryHeadline from '../SubStoryHeadline/SubStoryHeadline';

import './SubStoryLarge.css';

class SubStoryLarge extends Component {

	props:{
		link: string,
		img: string,
		title: string,
		description: string
	};
	
	render(){

//linear-gradient(to top, rgba(50,50,50,0.5), rgba(51,187,255,0.1));
//linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15))

		const style ={
			backgroundImage: `linear-gradient(rgba(0,0,0,0.25),rgba(0,0,0,0.25)), url(${this.props.img})`
		};

		return(
			<div className='SubStoryLarge' style={style}>
				<a href={this.props.link}>
					<SubStoryHeadline text={this.props.title} />
				</a>
			</div>
		)
	}
}



export default SubStoryLarge;