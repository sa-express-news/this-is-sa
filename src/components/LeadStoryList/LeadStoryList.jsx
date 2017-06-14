// @flow

//This is the container component for all Story components.
//This is where the app pings the story feed, constructing Story
//components for each item in the feed.

import React, { Component } from 'react';

import LeadStory from '../LeadStory/LeadStory';

import './LeadStoryList.css';

class LeadStoryList extends Component {
	props:{
		stories: any
	};

	render(){
		const listOfStories = this.props.stories;
		const stories = listOfStories.map(function(story, index){
			return <LeadStory key={index} img={story.img} title={story.title} link={story.link} description={story.description} />
		});
		return (
			<div className="LeadStoryList">
				{stories}
			</div>

		)
	}
}

export default LeadStoryList;