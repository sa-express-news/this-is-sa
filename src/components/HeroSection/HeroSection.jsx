// @flow

import React, {Component} from 'react';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';
import Paragraph from 'grommet/components/Paragraph';

import './HeroSection.css';

class HeroSection extends Component{
	props: {
		link: string,
		img: string,
		title: string,
		description: string
	};

	render(){
		return(
			<div className='HeroSection'>
				<a href={this.props.link}>
					<Hero size='small' background={<Image src={this.props.img} fit='cover' full={true} />}/>
					<Heading>{this.props.title}</Heading>
					<Paragraph>{this.props.description}</Paragraph>
				</a>
			</div>
		)
	}
}

export default HeroSection;