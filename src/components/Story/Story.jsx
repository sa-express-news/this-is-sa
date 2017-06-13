// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import Headline from '../Headline/Headline';

import './Story.css';

class Story extends Component {

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
			backgroundImage: `linear-gradient(rgba(0,0,0,0.15),rgba(0,0,0,0.15)), url(${this.props.img})`
		};

		return(
			<div className='Story' style={style}>
				<Headline text={this.props.title} />
			</div>
		)
	}
}



export default Story;