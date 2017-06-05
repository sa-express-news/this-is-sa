// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import Image from 'grommet/components/Image';
import Paragraph from 'grommet/components/Paragraph';
import Tile from 'grommet/components/Tile';

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
			<Tile wide={true}>
			<div className='Story'>
				<a href={this.props.link}>
					<Image src={this.props.img}/>
					<Paragraph align='start' size='large' className='storyTitle'>
					{this.props.title}
					</Paragraph>
					<Paragraph align='start' size='medium'>
					{this.props.description}
					</Paragraph>
				</a>
			</div>
			</Tile>
		)
	}
}



export default Story;