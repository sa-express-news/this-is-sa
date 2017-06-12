// @flow

//This is the container component for all Story components.
//This is where the app pings the story feed, constructing Story
//components for each item in the feed.

import React, { Component } from 'react';

import Story from '../Story/Story';

// import './StoryList.css';

class StoryList extends Component {
	props:{
		stories: any
	};

	render(){
		const listOfStories = this.props.stories;
		const stories = listOfStories.map(function(story, index){
			return <Story key={index} img={story.img} title={story.title} link={story.link} description={story.description} />
		});
		return (
			<div className="StoryList">
				{stories}
			</div>

		)
	}
}

export default StoryList;