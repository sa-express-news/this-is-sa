// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import Headline from '../Headline/Headline';

import './SubStory.css';

class SubStory extends Component {

	props:{
		link: string,
		img: string,
		title: string,
		description: string
	};

	render(){
		const style ={
			backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${this.props.img})`
		};

		return(
			<div className='SubStoryContainer'>
				<a href={this.props.link}>
				<div className='SubStory' style={style} onMouseEnter={this.handleMouseEnter}>
					<Headline text={this.props.title} />
				</div>
				</a>
			</div>
		)
	}
}



export default SubStory;