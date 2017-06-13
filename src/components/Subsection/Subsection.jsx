// @flow

//This is the container component for all Story components.
//This is where the app pings the story feed, constructing Story
//components for each item in the feed.

import React, { Component } from 'react';

import LeadStory from '../LeadStory/LeadStory';
import SubStoryLarge from '../SubStoryLarge/SubStoryLarge';

import './Subsection.css';

class Subsection extends Component {
	props:{
		stories: any,
		isMobile: boolean
	};

	render(){
		let isMobile = this.props.isMobile;
		const listOfStories = this.props.stories;
		const stories = listOfStories.map(function(story, index){
			if (isMobile){
				return <LeadStory key={index} img={story.img} title={story.title} link={story.link} description={story.description} />				
			}
			return <SubStoryLarge key={index} img={story.img} title={story.title} link={story.link} description={story.description} />
		});
		return (
			<div>
				<div className="Subsection">
					{stories}
				</div>
			</div>

		)
	}
}

export default Subsection;