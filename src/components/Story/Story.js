//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import Hero from 'grommet/components/Hero';
import Image from 'grommet/components/Image';
import Heading from 'grommet/components/Heading';

class Story extends Component {
	render(){
		return(

				<Hero size={'large'} background={<Image src={this.props.img} fit='cover' full={true} />}>
						<Heading>{this.props.title}</Heading>
				</Hero>
		)
	}
}



export default Story;