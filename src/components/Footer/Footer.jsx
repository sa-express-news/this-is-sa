// @flow

import React, { Component } from 'react';

import Credits from '../Credits/Credits';

class Footer extends Component{
	render(){
		return(
			<div className='Footer'>
				<Credits text='Videos by Lindsey Gawlik'/>
				<Credits text='Design by Kia Farhang'/>
			</div>
		)
	}
}

export default Footer;