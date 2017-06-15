// @flow

//Individualized story component. Expects props
//for img, title, byline and link.

import React, { Component } from 'react';

import Headline from '../Headline/Headline';

import './LeadStory.css';

class LeadStory extends Component {

	props:{
		link: string,
		img: string,
		title: string,
		description: string
	};

	state = {
    	hover: false
  	};

	handleMouseEnter = (event:Event) =>{
		if (!this.state.hover){
			this.setState({hover: true});
		}
	}
	
	render(){
		const style ={
			backgroundImage: `linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url(${this.props.img})`
		};

		return(
			<a href={this.props.link}>
			<div className='LeadStory' style={style} onMouseEnter={this.handleMouseEnter}>
				<Headline text={this.props.title} />
			</div>
			</a>
		)
	}
}



export default LeadStory;