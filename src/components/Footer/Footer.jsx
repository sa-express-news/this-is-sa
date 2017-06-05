// @flow

import React, { Component } from 'react';

import Box from 'grommet/components/Box';
import Paragraph from 'grommet/components/Paragraph';


class Footer extends Component{
	render(){
		return(
			<div className='Footer'>
				<Box align='center'>
					<Paragraph margin='none'>Stories and videos by Lindsey Gawlik</Paragraph>
					<Paragraph margin='none'>Design by Kia Farhang</Paragraph>
				</Box>
			</div>
		)
	}
}

export default Footer;