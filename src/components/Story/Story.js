//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Tile from 'grommet/components/Tile';

import './Story.css';

class Story extends Component {
	render(){
		return(
			<Tile wide={true}>
			<div className='Story'>
				<a href={this.props.link}>
					<Hero size={'medium'} background={<Image src={this.props.img} fit='cover' full={true} />}>
							<Heading>{this.props.title}</Heading>
					</Hero>
				</a>
			</div>
			</Tile>
		)
	}
}



export default Story;