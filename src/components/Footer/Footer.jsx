// @flow

import React, { Component } from 'react';

import Credits from '../Credits/Credits';

import './Footer.css';

class Footer extends Component{
	render(){
		return(
			<div className='Footer'>
				<Credits text='Videos by Lindsey Gawlik'/>
			</div>
		)
	}
}

export default Footer;