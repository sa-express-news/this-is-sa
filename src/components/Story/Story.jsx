// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import FullPhoto from '../FullPhoto/FullPhoto';
import Paragraph from '../Paragraph/Paragraph';

import './Story.css';

class Story extends Component {

	props:{
		link: string,
		img: string,
		title: string,
		description: string
	};
	
	render(){
		return(
			<div className='Story'>
				<a href={this.props.link}>
					<FullPhoto src={this.props.img} alt=''/>
					<Paragraph text={this.props.title} />
					<Paragraph text={this.props.description} />
				</a>
			</div>
		)
	}
}



export default Story;